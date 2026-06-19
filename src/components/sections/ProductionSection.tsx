import FootballImage from "@/assets/images/football-player.png";

export default function ProductionSection() {
  return (
    <section
      id="production-section"
      className="production-section"
    >
      {/* Background blur */}
      <div
        className="bg-blur-box"
      />

      {/* Football image */}
      <div
        className="football-area"
      >
        <img
          src={FootballImage}
          alt="Football player"
          className="h-full w-full object-cover grayscale"
        />
      </div>

      {/* GSAP target */}
      <div
        id="production-target"
        className="production-target"
      />

      {/* Title */}
      <div
        className="relative z-20 mt-12 flex justify-center lg:absolute lg:right-20 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
      >
        <h2 className="production-title">SINCE 2002 PRODUCING</h2>
      </div>
    </section>
  );
}
