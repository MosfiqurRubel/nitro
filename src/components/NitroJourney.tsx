import { useLayoutEffect } from "react";
import gsap from "@/lib/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NitroJourney() {
  useLayoutEffect(() => {
    const can = document.getElementById("floating-can");
    const production = document.getElementById("production-target");
    const flavor = document.getElementById("flavor-target");
    const greenCan = document.getElementById("nitro-green-real");

    if (!can || !production || !flavor) return;

    const getCenterOffset = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();

      return {
        x: rect.left + rect.width / 2 - window.innerWidth / 2,

        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      };
    };

    gsap.set(can, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      force3D: true,
    });

    ScrollTrigger.refresh();

    const productionPos = getCenterOffset(production);
    const flavorPos = getCenterOffset(flavor);

    // Production section pin
    // const productionPin = ScrollTrigger.create({
    //   trigger: "#production-section",
    //   start: "top top",
    //   end: "+=1800",
    //   pin: true,
    //   scrub: 1,
    // });

    // Production title animation
    gsap.fromTo(
      ".production-title",
      {
        x: 300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#production-section",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#flavor-section",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    // HERO -> PRODUCTION

    tl.to(can, {
      x: productionPos.x,
      y: productionPos.y,
      scale: 1.25,
      duration: 2,
      ease: "power2.out",
    });

    // HOLD

    tl.to(can, {
      duration: 2,
    });

    // BIG SPIN  rotate while moving

    tl.to(can, {
      rotation: 1080,
      duration: 2,
      ease: "none",
    });

    // MOVE TO FLAVOR

    tl.to(can, {
      x: flavorPos.x,
      y: flavorPos.y,
      scale: 0.32,
      rotation: 1440,
      duration: 3,
      ease: "power2.inOut",
    });

    // SWAP WITH REAL GREEN CAN

    if (greenCan) {
      tl.to(
        can,
        {
          opacity: 0,
          scale: 0.25,
          duration: 0.4,
        },
        ">",
      );

      tl.to(
        greenCan,
        {
          opacity: 1,
          duration: 0.4,
        },
        "<",
      );
    }

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleRefresh);

    return () => {
      // productionPin.kill();
      tl.kill();

      window.removeEventListener("resize", handleRefresh);

      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
