import { useLayoutEffect } from "react";
import gsap from "@/lib/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const getOffsetFromSection = (el: HTMLElement): { x: number; y: number } => {
  let top = 0;
  let left = 0;

  let node: HTMLElement | null = el;

  const section = el.closest("section") as HTMLElement | null;

  while (node && node !== section) {
    top += node.offsetTop;
    left += node.offsetLeft;

    node = node.offsetParent as HTMLElement | null;
  }

  return {
    x: left + el.offsetWidth / 2 - window.innerWidth / 2,

    y: top + el.offsetHeight / 2 - window.innerHeight / 2,
  };
};

export default function NitroJourney() {
  useLayoutEffect(() => {
    const can = document.getElementById("floating-can");

    const production = document.getElementById("production-target");

    const flavor = document.getElementById("flavor-target");

    const greenCan = document.getElementById("nitro-green-real");

    if (!can || !production || !flavor) return;

    const ctx = gsap.context(() => {
      /*
      ----------------------------------
      Initial State
      ----------------------------------
      */

      gsap.set(can, {
        xPercent: -50,

        yPercent: -50,

        x: 0,

        y: 0,

        scale: 1,

        rotation: 0,

        rotationX: 0,

        rotationY: 0,

        rotationZ: 0,

        opacity: 1,

        force3D: true,

        transformPerspective: 2000,

        transformOrigin: "center center",
      });

      if (greenCan) {
        gsap.set(greenCan, {
          opacity: 0,
        });
      }

      /*
      ----------------------------------
      Navbar Animation
      ----------------------------------
      */

      gsap.fromTo(
        "#navbar",
        {
          y: -40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
      );

      /*
      ----------------------------------
      Production title reveal
      ----------------------------------
      */

      gsap.fromTo(
        ".production-title",

        {
          opacity: 0,

          y: 40,
        },

        {
          opacity: 1,

          y: 0,

          ease: "none",

          scrollTrigger: {
            trigger: "#production-section",

            start: "top 60%",

            end: "top 20%",

            scrub: true,
          },
        },
      );

      /*
      ----------------------------------
      PHASE 1
      Hero → Production
      ----------------------------------
      */

      const phase1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",

          start: "top top",

          endTrigger: "#production-section",

          end: "top top",

          scrub: 2.5,

          invalidateOnRefresh: true,
        },
      });

      phase1.to(can, {
        x: () => getOffsetFromSection(production).x,

        y: () => getOffsetFromSection(production).y,

        scale: 1.4,

        rotation: 0,

        ease: "power2.out",
      });

      /*
      ----------------------------------
      PHASE 2
      Production Pin
      ----------------------------------
      */

      ScrollTrigger.create({
        trigger: "#production-section",
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      /*
        ----------------------------------
        PHASE 3
        Production → Flavor
        Motion Path
        ----------------------------------
        */

      const phase3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#production-section",
          start: "bottom top",
          endTrigger: "#flavor-section",
          end: "top top",
          scrub: 4,
          invalidateOnRefresh: true,
        },
      });

      const target = getOffsetFromSection(flavor);

      const path = [
        {
          x: getOffsetFromSection(production).x,
          y: getOffsetFromSection(production).y,
        },
        {
          x: target.x * 0.25,
          y: target.y * 0.05,
        },
        {
          x: target.x * 0.65,
          y: target.y * 0.55,
        },
        {
          x: target.x,
          y: target.y,
        },
      ];

      phase3.to(can, {
        motionPath: {
          path,
          curviness: 1.6,
          autoRotate: false,
        },

        scale: 0.58,
        rotationZ: -55,
        rotationY: -25,
        rotationX: 15,
      });
      /*
      ----------------------------------
      Swap Floating → Real Green Can
      ----------------------------------
      */

      if (greenCan) {
        phase3.to(
          can,

          {
            opacity: 0,

            scale: 0.6,

            duration: 0.2,
          },

          ">-0.05",
        );

        phase3.to(
          greenCan,

          {
            opacity: 1,

            duration: 0.2,
          },

          "<",
        );
      }

      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      ctx.revert();

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
