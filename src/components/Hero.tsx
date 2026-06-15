import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
      .from(
        ".hero-title",
        {
          opacity: 0,
          y: 80,
          duration: 1,
        },
        "-=0.2"
      )
      .from(
        ".hero-desc",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        ".hero-btn",
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        ".can-container",
        {
          opacity: 0,
          scale: 0.5,
          rotation: 20,
          duration: 1.4,
          ease: "back.out(1.8)",
        },
        "-=1"
      );

    gsap.to(".can-container", {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            w-125
            h-125
            rounded-full
            bg-purple-600/30
            blur-[120px]
            -top-25
            -left-25
          "
        />

        <div
          className="
            absolute
            w-100
            h-100
            rounded-full
            bg-pink-500/20
            blur-[120px]
            -bottom-25
            -right-25
          "
        />
      </div>

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          grid
          lg:grid-cols-2
          gap-10
          items-center
          relative
          z-10
        "
      >
        {/* Left Content */}
        <div>
          <div
            className="
              hero-badge
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/10
              border
              border-white/10
              text-sm
              text-white
            "
          >
            ⚡ NEW ENERGY FORMULA
          </div>

          <h1
            className="
              hero-title
              text-white
              font-black
              leading-none
              mt-6
              text-5xl
              md:text-7xl
              lg:text-8xl
            "
          >
            BOOST
            <br />
            YOUR
            <br />
            POWER
          </h1>

          <p
            className="
              hero-desc
              mt-6
              text-white/70
              text-lg
              max-w-xl
            "
          >
            Unleash explosive energy with every sip.
            Crafted for athletes, gamers and creators.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
                hero-btn
                px-8
                py-4
                rounded-full
                bg-linear-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
              "
            >
              Buy Now
            </button>

            <button
              className="
                hero-btn
                px-8
                py-4
                rounded-full
                border
                border-white/20
                text-white
              "
            >
              Explore Flavors
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <div className="can-container relative">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                w-87.5
                h-87.5
                rounded-full
                bg-purple-500/40
                blur-[80px]
              "
            />

            {/* Temporary Can */}
            <div
              className="
                relative
                w-65
                h-130
                rounded-10
                bg-linear-to-b
                from-purple-500
                via-pink-500
                to-purple-900
                flex
                items-center
                justify-center
                text-8xl
                shadow-2xl
              "
            >
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}