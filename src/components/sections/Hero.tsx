import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Heading
        as="h1"
        className="text-[32vw] uppercase text-[#D9F300]! tracking-[-24px] italic leading-none relative -mt-8"
        children="Nitro"
      />


      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
