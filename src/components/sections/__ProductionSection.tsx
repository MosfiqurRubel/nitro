import FootballImage from "@/assets/images/football-player.png";

export default function ProductionSection() {
  return (
    <section
      id="production-section"
      className="relative min-h-screen overflow-hidden bg-black px-16 py-20"
    >
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

      {/* Anchor for floating can — centered under the production-title text */}
      <div
        id="production-target"
        className="
        absolute
        right-[8%]
        top-[78%]
        z-100
        w-20
        h-20
        -translate-x-1/2
        -translate-y-1/2"
      />

      <div
        className="
        absolute
        right-20
        top-1/2
        z-9999
        -translate-y-1/2
        "
      >
        <h2
          className="
          production-title
          max-w-142
          text-[9vw]
          font-black
          uppercase
          italic
          leading-[0.85]
          tracking-[-10px]
          text-[#D9F300]
          opacity-0
          "
        >
          SINCE 2002 PROD UCING
        </h2>
      </div>
    </section>
  );
}
