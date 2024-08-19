import { cn } from "@/lib/utils";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalTextEntity } from "@lexical/react/useLexicalTextEntity";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  TextNode,
  type EditorConfig,
  type NodeKey,
  type SerializedTextNode,
  type Spread,
} from "lexical";
import { useCallback, useEffect } from "react";

// Define the regex to match {{variable}}
const VARIABLE_REGEX = /\{\{.*?\}\}/g;

// Type for serialized VariableNode
export type SerializedVariableNode = Spread<
  {
    type: "colored";
    text: string;
    color: string;
  },
  SerializedTextNode
>;

// Custom VariableNode class for variable highlighting
class VariableNode extends TextNode {
  __color: string;

  constructor(text: string, color: string, key?: NodeKey) {
    super(text, key);
    this.__color = color;
  }

  static getType(): string {
    return "colored";
  }

  static clone(node: VariableNode): VariableNode {
    return new VariableNode(node.__text, node.__color, node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = super.createDOM(config);
    element.style.color = this.__color;
    return element;
  }

  updateDOM(
    prevNode: VariableNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    const isUpdated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__color !== this.__color) {
      dom.style.color = this.__color;
    }
    return isUpdated;
  }

  static importJSON(serializedNode: SerializedVariableNode): TextNode {
    return new VariableNode(serializedNode.text, serializedNode.color);
  }

  exportJSON(): SerializedVariableNode {
    return {
      ...super.exportJSON(),
      type: "colored",
      color: this.__color,
    };
  }
}

// Plugin to apply VariableNode to matched variable patterns in the text
function VariableHighlightPlugin({
  color,
}: {
  color: string;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([VariableNode])) {
      throw new Error(
        "VariableHighlightPlugin: VariableNode not registered on editor"
      );
    }
  }, [editor]);

  // Function to create a VariableNode from a TextNode
  const $createVariableNode = useCallback(
    (textNode: TextNode): VariableNode => {
      const textContent = textNode.getTextContent();
      const variableText = textContent.slice(2, -2); // Remove the curly braces
      return new VariableNode(`{{${variableText}}}`, color);
    },
    [color]
  );

  // Function to match variables in the text
  const getVariableMatch = useCallback((text: string) => {
    VARIABLE_REGEX.lastIndex = 0;
    const matchArr = VARIABLE_REGEX.exec(text);
    if (matchArr === null) {
      return null;
    }

    const fullMatch = matchArr[0];
    const variableLength = fullMatch.length;
    const startOffset = matchArr.index;
    const endOffset = startOffset + variableLength;
    return {
      end: endOffset,
      start: startOffset,
    };
  }, []);

  useLexicalTextEntity<VariableNode>(
    getVariableMatch,
    VariableNode,
    $createVariableNode
  );

  return null;
}

// Plugin to handle editor state changes and propagate content
function OnChangePlugin({
  onChange,
}: {
  onChange: (content: string) => void;
}): null {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const root = $getRoot();
        const content = root.getTextContent();
        onChange(content);
      });
    });
  }, [editor, onChange]);

  return null;
}

// Main Editor component
type EditorProps = {
  initialContent: string;
  onChange: (content: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
};

export function Editor({
  initialContent,
  onChange,
  onFocus,
  onBlur,
  placeholder = "Enter a text...",
}: EditorProps): JSX.Element {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "Editor",
        theme: {},
        onError: (error: Error) => {
          console.error(error);
        },
        nodes: [VariableNode],
        editorState: () => {
          const paragraph = $createParagraphNode();
          const text = $createTextNode(initialContent);
          paragraph.append(text);
          $getRoot().append(paragraph);
          $getRoot().selectEnd();
        },
      }}
    >
      <div className="relative h-full w-full">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="h-full w-full active:outline-none focus:outline-none relative text-sm"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          }
          placeholder={
            <div
              className={cn(
                "h-full w-full",
                "active:outline-none focus:outline-none",
                "absolute text-sm",
                "top-[50%] left-0 transform translate-y-[-50%]",
                "pointer-events-none",
                "text-stone-500"
              )}
            >
              {placeholder}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <VariableHighlightPlugin color={"orange"} />
        <OnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
}
