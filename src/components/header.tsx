import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import H1 from "./h1";
import P from "./p";

export default function Header() {
  return (
    <header className="w-full h-[100vh] overflow-hidden">
      <video
        poster="/images/poster.webp"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full absolute top-0 left-0"
      >
        <source src="videos/5309381-hd_1920_1080_25fps.mp4" type="video/mp4" />
        <Image
          src="/images/poster.jpg"
          alt="A clean, well maintained luxury car."
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col py-20 gap-4 items-center justify-center text-center px-4 sm:px-8">
        <H1 className="text-[#F8F8FF] transform animate-slideIn">
          Plano&apos;s Premium Car Protection
        </H1>
        <P className="text-[#F8F8FF] transform animate-slideIn">
          Paint Films, Window Tints, and Ceramic Coatings Done Right.
        </P>
        <Button
          asChild
          className="transition-transform transform duration-500 hover:scale-105 hover:bg-primary"
        >
          <Link
            className="transition-all transform hover:text-yellow-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-[100%] hover:after:animate-underline-expand"
            href="#"
          >
            Book Appointment
          </Link>
        </Button>
      </div>
    </header>
  );
}
