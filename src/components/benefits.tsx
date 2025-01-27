import Image from "next/image";
import H2 from "./h2";
import P from "./p";

const benefits = [
  {
    title: "Enhanced Privacy and Comfort",
    imageUrl: "/images/tinted-car-in-city.webp",
    description:
      "Our premium window tinting service blocks harmful UV rays, reducing heat and glare inside your vehicle. This creates a more comfortable, cooler driving experience, while also providing increased privacy from onlookers. Whether you're in the city or on the highway, you'll enjoy a quieter, more relaxed ride.",
  },
  {
    title: "Long Lasting Paint Protection",
    imageUrl: "/images/paint.webp",
    description:
      "Protect your vehicle’s paint from the damaging effects of road debris, harsh weather, and everyday wear. Our ceramic coatings and paint protection films create a durable barrier that preserves your car’s original finish. With our services, your car stays looking new for years, reducing the need for frequent touch-ups.",
  },
  {
    title: "Invisible Defense Against Scratches",
    imageUrl: "/images/scratch.webp",
    description:
      "Your luxury vehicle deserves to stay flawless. Our paint protection film is designed to protect your car from rock chips, scratches, and swirl marks without affecting its appearance. The film is virtually invisible, allowing your vehicle’s aesthetic to shine while staying safe from everyday damage.",
  },
  {
    title: "Protect Your Investment",
    imageUrl: "/images/investment.webp",
    description:
      "Your car is more than just a vehicle—it’s an investment. Our high-end protective services safeguard your vehicle’s appearance, ensuring it retains its value over time. By protecting the paint, interior, and exterior from wear and tear, we help preserve the resale value of your luxury car, so it stays in top condition longer.",
  },
];

export default function Benefits() {
  return (
    <section className="flex flex-col mt-10 text-[#F8F8FF] text-center md:text-left items-center">
      {benefits.map((benefit, index) => (
        <Benefit key={index} {...benefit} />
      ))}
    </section>
  );
}

function Benefit({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div
      data-aos="fade-up"
      className="relative w-full h-[50vh] p-4 flex flex-col justify-center gap-4 overflow-hidden group"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105`}
      >
        <Image src={imageUrl} fill className="object-cover" alt={title}></Image>
      </div>
      <div className="absolute inset-0 bg-black/75"></div>
      <H2 className="text-[#F8F8FF] z-10">{title}</H2>
      <P className="z-10 md:w-[80%]">{description}</P>
    </div>
  );
}
