import NitroCan from "@/assets/images/Can.svg";
import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <section className="flex-center relative overflow-hidden">
      {/* Background glow */}

      <Heading
        as="h1"
        className="text-[32vw] uppercase text-[#D9F300]! tracking-[-24px] leading-none"
        children="Nitro"
      />
      <div
        className="
        absolute
        left-1/2
        top-[50%]
        mt-[4vw]
        ml-7
        z-20
        -translate-x-1/2
        -translate-y-1/2
        "
      >
        <img
          src={NitroCan}
          alt="Nitro"
          // className="w-237.5 max-w-none drop-shadow-[0_40px_80px_rgba(0,0,0,.8)]"
          className="w-[60vw] max-w-none drop-shadow-[0_40px_80px_rgba(0,0,0,.8)]"
        />
      </div>
    </section>
  );
}
