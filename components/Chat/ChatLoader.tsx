import { IconDots } from "@tabler/icons-react";
import { FC } from "react";

export const ChatLoader: FC = () => {
  return (
    <div className="flex flex-col flex-start">
      <div
        className={
          "flex items-center bg-neutral-200 text-neutral-900 rounded-2xl px-4 py-2 w-fit break-words"
        }
        style={{ overflowWrap: "anywhere" }}
      >
        <IconDots className="animate-pulse" />
      </div>
    </div>
  );
};
