import { toast } from 'react-toastify'
import checkCircle from '../assets/check-circle.svg'
import { UploadedFile } from '../services/UploadService'

interface SuccessStepProps {
  uploadedFile: UploadedFile
}

export function SuccessStep({ uploadedFile }: SuccessStepProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(uploadedFile.filePath)
    toast.success('Link coppied to clipboard')
  }

  return (
    <>
      <img className="mx-auto" src={checkCircle} alt="check circle" />
      <h1 className="mt-3 text-center text-lg font-medium tracking-tight text-neutral-900">
        Upload Successfully!
      </h1>

      <img
        src={uploadedFile.filePath}
        alt="Uploaded image"
        className="mt-8 h-60 w-full rounded-lg object-cover"
      />

      <div className="mt-8 flex h-12.5 items-center gap-2 rounded-lg border border-blue-300 bg-blue-50 py-1 pl-4 pr-1">
        <a
          href={uploadedFile.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 truncate text-xs text-neutral-900"
        >
          {uploadedFile.filePath}
        </a>
        <button
          onClick={handleCopyToClipboard}
          className="h-full rounded-md bg-blue-500 px-4 text-xs font-semibold tracking-tight text-white transition-all hover:brightness-110"
        >
          Copy Link
        </button>
      </div>
    </>
  )
}
