export function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020204]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,0.09),transparent_22%),radial-gradient(circle_at_52%_10%,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_14%_28%,rgba(96,165,250,0.09),transparent_22%),linear-gradient(180deg,#020204_0%,#040407_50%,#07070A_100%)]" />
      <div className="starfield absolute inset-0 opacity-40" />
      <div className="galaxy-grid absolute inset-0 opacity-[0.08]" />
      <div className="noise-layer absolute inset-0 opacity-[0.04]" />
      <div className="animate-orb-drift absolute left-1/2 top-14 h-[22rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-300/7 blur-[72px]" />
      <div className="absolute -left-20 top-1/3 h-[18rem] w-[18rem] rounded-full bg-blue-400/6 blur-[80px]" />
      <div className="absolute -right-16 top-1/4 h-[20rem] w-[20rem] rounded-full bg-cyan-200/5 blur-[88px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(2,2,4,0.82)_82%,#020204_100%)]" />
    </div>
  );
}
