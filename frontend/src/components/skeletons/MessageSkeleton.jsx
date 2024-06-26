import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="bg-gray-600 animate-pulse w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-600 animate-pulse rounded-xl h-4 w-40"></div>
          <div className="bg-gray-600 animate-pulse rounded-xl h-4 w-48"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex items-end flex-col gap-1">
          <div className="bg-gray-600 animate-pulse rounded-xl h-4 w-48"></div>
        </div>
        <div className="bg-gray-600 animate-pulse w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
