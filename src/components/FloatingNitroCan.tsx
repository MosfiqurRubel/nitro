import NitroCan from "@/assets/images/can.png";

export default function FloatingNitroCan() {
  return (
    <div
      id="floating-can"
      className="fixed left-1/2 top-1/2 z-9999 pointer-events-none will-change-transform"
      style={{
        perspective: "2500px",
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={NitroCan}
        alt="Nitro"
        className="w-[60vw] h-auto max-w-none drop-shadow-[0_40px_80px_rgba(0,0,0,.9)]"
        draggable={false}
      />
    </div>
  );
}
