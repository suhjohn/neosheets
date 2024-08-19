import { useCallback, useEffect, useRef } from "react";

interface ScrollAndThumbHandlerProps {
  containerRef: React.RefObject<HTMLDivElement>;
  onScroll: (scrollTop: number, scrollLeft: number) => void;
  updateThumbPositions: () => void;
  setScrollTop: (scrollTop: number) => void;
  setScrollLeft: (scrollLeft: number) => void;
  totalHeight: number;
}

export const useScrollAndThumbHandler = ({
  containerRef,
  onScroll,
  updateThumbPositions,
  totalHeight,
}: ScrollAndThumbHandlerProps) => {
  const isScrollingRef = useRef(false);
  const transientScrollOffsetYRef = useRef(0);
  const transientScrollOffsetXRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  // New refs for autoscrolling
  const autoScrollXRef = useRef(0);
  const autoScrollYRef = useRef(0);
  const isAutoScrollingRef = useRef(false);

  // New ref for tracking last frame time
  const lastFrameTimeRef = useRef(0);

  const doScroll = useCallback(() => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastFrameTimeRef.current;

    // Limit to 60 FPS (approximately 16.67ms between frames)
    if (elapsedTime < 16.67) {
      rafIdRef.current = requestAnimationFrame(doScroll);
      return;
    }

    lastFrameTimeRef.current = currentTime;

    if (containerRef.current) {
      const minScrollTop = 0;
      const maxScrollTop =
        containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const minScrollLeft = 0;
      const maxScrollLeft =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;

      const newScrollTop = Math.max(
        minScrollTop,
        Math.min(
          containerRef.current.scrollTop + transientScrollOffsetYRef.current,
          maxScrollTop
        )
      );
      const newScrollLeft = Math.max(
        minScrollLeft,
        Math.min(
          containerRef.current.scrollLeft + transientScrollOffsetXRef.current,
          maxScrollLeft
        )
      );

      onScroll(newScrollTop, newScrollLeft);
      updateThumbPositions();
      containerRef.current.scrollTo({
        top: newScrollTop,
        left: newScrollLeft,
      });
    }

    isScrollingRef.current = false;
    rafIdRef.current = null;

    // Only reset offsets if not autoscrolling
    if (!isAutoScrollingRef.current) {
      transientScrollOffsetXRef.current = 0;
      transientScrollOffsetYRef.current = 0;
    }
  }, [containerRef, onScroll, updateThumbPositions]);

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      let deltaY = event.deltaY;
      let deltaX = event.deltaX;

      // Smooth out small diagonal scrolls
      if (Math.abs(deltaY) > 60 && Math.abs(deltaX) < 45) {
        deltaX = 0;
      } else if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 45) {
        deltaY = 0;
      }

      transientScrollOffsetXRef.current += deltaX;
      transientScrollOffsetYRef.current += deltaY;

      if (isScrollingRef.current) {
        return;
      }
      isScrollingRef.current = true;
      rafIdRef.current = requestAnimationFrame(doScroll);
    },
    [doScroll]
  );

  const handleThumbDrag = useCallback(
    (e: MouseEvent, isVertical: boolean) => {
      e.preventDefault();
      e.stopPropagation();
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerSize = isVertical
        ? containerRect.height
        : containerRect.width;
      const scrollSize = isVertical
        ? totalHeight
        : containerRef.current.scrollWidth;

      // Calculate mouse position relative to the container
      const mousePosition = isVertical
        ? e.clientY - containerRect.top
        : e.clientX - containerRect.left;

      // Calculate the scroll position based on mouse position
      let scrollPosition =
        (mousePosition / containerSize) * (scrollSize - containerSize);

      // Clamp the scroll position between 0 and the maximum scroll position
      scrollPosition = Math.max(
        0,
        Math.min(scrollPosition, scrollSize - containerSize)
      );

      if (isVertical) {
        transientScrollOffsetYRef.current =
          scrollPosition - containerRef.current.scrollTop;
      } else {
        transientScrollOffsetXRef.current =
          scrollPosition - containerRef.current.scrollLeft;
      }
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        doScroll();
      }
    },
    [containerRef, totalHeight, doScroll]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, isVertical: boolean) => {
      e.preventDefault();
      e.stopPropagation();
      const moveHandler = (mouseEvent: MouseEvent) =>
        handleThumbDrag(mouseEvent, isVertical);
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", moveHandler);
          document.body.style.removeProperty("cursor");
        },
        { once: true }
      );
    },
    [handleThumbDrag]
  );

  const stopAutoScroll = useCallback(() => {
    autoScrollXRef.current = 0;
    autoScrollYRef.current = 0;
    isAutoScrollingRef.current = false;
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  // Updated autoscroll loop
  const startAutoScroll = useCallback(() => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastFrameTimeRef.current;

    if (elapsedTime < 16.67) {
      autoScrollRef.current = requestAnimationFrame(startAutoScroll);
      return;
    }

    lastFrameTimeRef.current = currentTime;

    if (!isAutoScrollingRef.current) {
      return;
    }

    transientScrollOffsetXRef.current = autoScrollXRef.current;
    transientScrollOffsetYRef.current = autoScrollYRef.current;
    doScroll();
    autoScrollRef.current = requestAnimationFrame(startAutoScroll);
  }, [doScroll]);

  const handleAutoScroll = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollSpeed = 60;
      const scrollThreshold = 0;

      let scrollX = 0;
      let scrollY = 0;
      if (e.clientY <= rect.top + scrollThreshold) {
        scrollY = -scrollSpeed;
      } else if (e.clientY > rect.bottom - scrollThreshold) {
        scrollY = scrollSpeed;
      }
      if (e.clientX <= rect.left + scrollThreshold) {
        scrollX = -scrollSpeed;
      } else if (e.clientX > rect.right - scrollThreshold) {
        scrollX = scrollSpeed;
      }
      // Update autoscroll refs
      autoScrollXRef.current = scrollX;
      autoScrollYRef.current = scrollY;
      
      // Start or stop the autoscroll loop
      if (scrollX !== 0 || scrollY !== 0) {
        if (!isAutoScrollingRef.current) {
          isAutoScrollingRef.current = true;
          startAutoScroll();
        }
      } else {
        stopAutoScroll();
      }
    },
    [containerRef, stopAutoScroll, startAutoScroll]
  );

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      stopAutoScroll();
    };
  }, [stopAutoScroll]);

  return {
    handleWheel,
    handleMouseDown,
    stopAutoScroll,
    handleAutoScroll,
  };
};
