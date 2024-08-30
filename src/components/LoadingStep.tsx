export function LoadingStep() {
  return (
    <>
      <h1 className="text-lg font-medium tracking-tight text-neutral-900">
        Uploading
      </h1>
      <div className="mt-8 h-[6px] w-full overflow-hidden rounded-full bg-neutral-100">
        <div className="h-full w-full origin-left-right animate-progress rounded-full bg-blue-500"></div>
      </div>
    </>
  )
}
