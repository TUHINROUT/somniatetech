import type { CSSProperties, ReactNode } from "react";

/**
 * Photo block. Drop a file into /public/images with the same name and it appears
 * automatically; until then a soft gradient is shown (no broken images, no errors).
 */
export default function Photo({
  img,
  g,
  className = "",
  children,
  label,
}: {
  img?: string;
  g: string[];
  className?: string;
  children?: ReactNode;
  label?: string;
}) {
  const grad = `linear-gradient(135deg, ${g[0]}, ${g[1]})`;
  const style: CSSProperties = {
    backgroundImage: img ? `url(/images/${img}), ${grad}` : grad,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={`relative overflow-hidden ${className}`} style={style} role={label ? "img" : undefined} aria-label={label}>
      {children}
    </div>
  );
}
