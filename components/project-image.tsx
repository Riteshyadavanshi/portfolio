"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
}

export const ProjectImage = ({
  src,
  alt,
  fill,
  width,
  height,
  className,
  containerClassName,
}: ProjectImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-zinc-800/80 text-zinc-500",
          fill ? "absolute inset-0" : "w-full h-full min-h-[200px]",
          containerClassName,
        )}
        role="img"
        aria-label={alt}
      >
        <ImageIcon size={32} className="opacity-40" />
        <span className="text-xs font-medium uppercase tracking-wider opacity-60">
          Preview unavailable
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};
