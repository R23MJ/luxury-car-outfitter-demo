import { cn } from "@/lib/utils";

export default function H1({
  children,
  className,
  AOSData,
}: {
  children: React.ReactNode;
  className?: string;
  AOSData?: string;
}) {
  return (
    <h1
      data-aos={AOSData}
      className={cn("text-2xl sm:text-4xl tracking-widest", className)}
    >
      {children}
    </h1>
  );
}
