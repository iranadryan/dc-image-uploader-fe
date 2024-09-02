export function LoadingStep() {
  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 shadow-main transition-all dark:bg-neutral-800">
      <p className="mt-2 text-xs font-light leading-tight tracking-tight text-neutral-950 transition-all dark:text-neutral-50/80">
        <strong className="font-medium">Uploading,</strong> please wait
      </p>
      <div className="h-[6px] w-full max-w-80 overflow-hidden rounded-full bg-neutral-100 transition-all dark:bg-neutral-700">
        <div className="h-full w-full origin-left-right animate-progress rounded-full bg-blue-500"></div>
      </div>
    </div>
  )
}
