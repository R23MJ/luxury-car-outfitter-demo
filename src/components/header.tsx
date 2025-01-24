import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[100vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="A clean, well maintained luxury car."
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col py-20 items-center text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-4xl text-black m-4 tracking-widest">
          Alta Mere Plano
        </h1>
        <p className="text-black text-sm sm:text-lg">
          Luxury window tinting and auto accessories in Plano, TX
        </p>
      </div>
    </header>
  );
}
