export function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020204]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,0.13),transparent_24%),radial-gradient(circle_at_52%_8%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_12%_26%,rgba(96,165,250,0.12),transparent_26%),radial-gradient(circle_at_90%_18%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#020204_0%,#040407_48%,#07070A_100%)]" />
      <div className="starfield absolute inset-0 opacity-55" />
      <div className="starfield-fine absolute inset-0 opacity-40" />
      <div className="galaxy-grid absolute inset-0 opacity-[0.12]" />
      <div className="noise-layer absolute inset-0 opacity-[0.055]" />
      <div className="animate-orb-drift absolute left-1/2 top-16 h-[28rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[96px]" />
      <div className="animate-orb-drift absolute -left-28 top-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-400/8 blur-[100px]" style={{ animationDelay: "2s" }} />
      <div className="animate-orb-drift absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-200/7 blur-[112px]" style={{ animationDelay: "4s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(2,2,4,0.78)_82%,#020204_100%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-200/8 to-transparent" />
    </div>
  );
}
