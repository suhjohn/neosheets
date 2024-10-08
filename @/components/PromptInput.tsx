import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { type ChatMessage } from "@/types/chat";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { useState, type FC } from "react";
import { Editor } from "./Editor";

type PromptInputProps = {
  completionPromptProps?: {
    value: string;
    onChange: (value: string) => void;
  };
  chatPromptProps?: {
    value: ChatMessage[];
    onChange: (value: ChatMessage[]) => void;
  };
};

const CompletionPromptInput: FC<PromptInputProps> = ({
  completionPromptProps,
}) => {
  return (
    <Textarea
      value={completionPromptProps?.value}
      onChange={(e) => completionPromptProps?.onChange(e.target.value)}
    />
  );
};

const ChatPromptInput: FC<PromptInputProps> = ({ chatPromptProps }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const nextRole = () => {
    const lastRole = chatPromptProps?.value.slice(-1)[0]?.role;
    if (lastRole === "system") {
      return "user";
    }
    if (lastRole === "user") {
      return "assistant";
    }
    if (lastRole === "assistant") {
      return "user";
    }
    return "system";
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      {chatPromptProps?.value.map((message, index) => (
        <div key={index} className="flex flex-col gap-2 group relative">
          <div
            className={cn(
              "flex",
              "flex-col",
              "gap-2",
              "border",
              "border-transparent",
              "rounded-md",
              "py-2",
              "px-3",
              "group-hover:border",
              "group-hover:border-stone-200",
              "transition-colors",
              "group-hover:dark:border-stone-800",
              focusedIndex === index
                ? "border-blue-500 group-hover:border-blue-500 group-hover:dark:border-blue-500"
                : "border-transparent group-hover:border-stone-200 group-hover:dark:border-stone-800"
            )}
          >
            <div className="flex justify-between items-center">
              <p className="text-xsm font-[500]">
                {message.role.toUpperCase()}
              </p>
              <Button
                variant={"icon"}
                size={"sm"}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                onClick={() => {
                  if (chatPromptProps === undefined) {
                    return;
                  }
                  chatPromptProps.onChange(
                    chatPromptProps.value.filter((_, i) => i !== index)
                  );
                }}
                className={cn(
                  "absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity",
                  focusedIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                <XCircleIcon size={12} />
              </Button>
            </div>
            <div className="w-full relative min-h-[30px]">
              <Editor
                initialContent={message.content}
                onChange={(content) => {
                  if (chatPromptProps === undefined) {
                    return;
                  }
                  if (content === "") {
                    return;
                  }
                  const newChatPrompt = [...chatPromptProps.value];
                  newChatPrompt[index] = {
                    ...newChatPrompt[index],
                    content: content,
                  };
                  chatPromptProps.onChange(newChatPrompt);
                }}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                placeholder={`Enter ${message.role} message...`}
              />
            </div>
          </div>
        </div>
      ))}
      <Button
        className="flex space-x-2"
        variant={"secondary"}
        onClick={() => {
          if (chatPromptProps === undefined) {
            return;
          }
          chatPromptProps.onChange([
            ...chatPromptProps.value,
            { role: nextRole(), content: "" },
          ]);
        }}
      >
        <PlusIcon size={12} />
        <p>Add message</p>
      </Button>
    </div>
  );
};

export const PromptInput: FC<PromptInputProps> = (props) => {
  if (props.completionPromptProps !== undefined) {
    return <CompletionPromptInput {...props} />;
  }
  if (props.chatPromptProps !== undefined) {
    return <ChatPromptInput {...props} />;
  }
  throw new Error(
    "PromptInput: completionPromptProps or chatPromptProps must be defined"
  );
};
