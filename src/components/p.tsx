import { cn } from "@/lib/utils";

export default function P({
  children,
  className,
  AOSData,
}: {
  children: React.ReactNode;
  className?: string;
  AOSData?: string;
}) {
  return (
    <p data-aos={AOSData} className={cn("text-sm md:text-lg", className)}>
      {children}
    </p>
  );
}
