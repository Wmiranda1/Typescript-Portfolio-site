export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-zinc-950"
    >
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-fuchsia-400/30 blur-[120px] animate-aurora-1 dark:bg-fuchsia-500/20" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-sky-400/30 blur-[120px] animate-aurora-2 dark:bg-sky-500/20" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-400/30 blur-[120px] animate-aurora-3 dark:bg-violet-500/20" />
    </div>
  )
}
