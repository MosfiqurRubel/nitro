import NitroCan from "@/assets/images/Can.svg";

export default function FloatingNitroCan() {
  return (
    <div
      id="floating-can"
      className="fixed left-1/2 top-1/2 z-9999 pointer-events-none will-change-transform"
    >
      <img
        src={NitroCan}
        alt="Nitro"
        className="w-[60vw] max-w-none drop-shadow-[0_40px_80px_rgba(0,0,0,.9)]"
      />
    </div>
  );
}