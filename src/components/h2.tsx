"use client";

import { cn } from "@/lib/utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function H2({
  children,
  className,
  AOSData,
}: {
  children: React.ReactNode;
  className?: string;
  AOSData?: string;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <h2
      data-aos={AOSData}
      className={cn("text-xl sm:text-3xl tracking-widest", className)}
    >
      {children}
    </h2>
  );
}
