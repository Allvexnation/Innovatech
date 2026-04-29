import type { ImgHTMLAttributes } from "react";

interface ProtectedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ProtectedImage({ 
  src, 
  alt, 
  className = "",
  ...props 
}: ProtectedImageProps) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
      {...props}
      style={{
        ...props.style,
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        WebkitTouchCallout: "none",
      }}
    />
  );
}