import { cn } from "@/lib/utils";

export default function H3({
  children,
  className,
  AOSData,
}: {
  children: React.ReactNode;
  className?: string;
  AOSData?: string;
}) {
  return (
    <h3
      data-aos={AOSData}
      className={cn("text-5xl tracking-widest", className)}
    >
      {children}
    </h3>
  );
}
