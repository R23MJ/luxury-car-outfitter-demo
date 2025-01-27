import Link from "next/link";
import P from "./p";
import H3 from "./h3";
import H2 from "./h2";

export default function Statistics() {
  return (
    <div className="bg-gradient-to-t from-zinc-950 to-zinc-900 w-full h-full overflow-hidden">
      <H2
        AOSData="fade-up"
        className="text-3xl tracking-widest p-4 text-center text-[#F8F8FF] pt-12"
      >
        The Top Choice for Luxury Car Owners
      </H2>
      <section
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Stat header="15%">
          <P className="w-[70%]">
            increase in resale value by protecting your vehicle&apos;s paint and
            interior when compared to unprotected vehicles.*
          </P>
          <Link
            className="text-yellow-500 hover:underline"
            href="https://www.keystonedetailpa.com/how-paint-protection-film-can-increase-resale-value-the-impact-explained"
          >
            Source
          </Link>
        </Stat>
        <Stat header="$300">
          <P className="w-[70%]">
            saved anually on fuel, interior repairs, and maintenance by
            protecting your vehicle.**
          </P>
          <span className="text-xs text-[#F8F8FF]/65 w-[70%]">
            This estimate accounts for the combined benefits of fuel savings and
            interior protection, offering up to $300 per year in total savings.
          </span>
        </Stat>
        <Stat header="99%">
          <P className="w-[70%]">
            of UV rays are blocked by our window tints, protecting your interior
            and reducing sun damage.
          </P>
        </Stat>
      </section>
    </div>
  );
}

function Stat({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2 text-[#F8F8FF] hover:scale-105 transform transition-transform duration-700">
      <H3 AOSData="fade-up" className="text-yellow-500 mb-8">
        {header}
      </H3>
      {children}
    </div>
  );
}
