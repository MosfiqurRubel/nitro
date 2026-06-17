import NitroCan from "@/assets/images/can-two.png";
import FootballImage from "@/assets/images/football-player.png";

export default function ProductionSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-16 py-20">
      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-175
        w-175
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-white/10
        blur-[180px]
        "
      />

      {/* Football image */}

      <div
        className="
        absolute
        left-14
        top-36
        z-10
        h-190
        w-190
        overflow-hidden
        rounded-[48px]
        "
      >
        <img
          src={FootballImage}
          alt=""
          className="h-full w-full object-cover grayscale"
        />
      </div>

      {/* Can */}

      <div
        className="
        absolute
        left-[48%]
        top-[52%]
        z-30
        -translate-x-1/2
        -translate-y-1/2
        "
      >
        <img
          src={NitroCan}
          alt="Nitro"
          className="
          w-312.5
          max-w-none
          drop-shadow-[0_50px_80px_rgba(0,0,0,.85)]
          "
        />
      </div>

      {/* Right text */}

      <div
        className="
        absolute
        right-20
        top-1/2
        z-40
        -translate-y-1/2
        "
      >
        <h2
          className="
          max-w-142
          text-[9vw]
          font-black
          uppercase
          italic
          leading-[0.85]
          tracking-[-8px]
          text-[#D9F300]
          "
        >
          SINCE 2002 PROD UCING
        </h2>
      </div>
    </section>
  );
}
