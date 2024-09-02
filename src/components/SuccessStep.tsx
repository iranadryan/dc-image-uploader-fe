import { toast } from 'react-toastify'
import { UploadedFile } from '../services/UploadService'
import { IconShare } from './icons/IconShare'
import { IconDownload } from './icons/IconDownload'
import axios from 'axios'

interface SuccessStepProps {
  uploadedFile: UploadedFile
}

export function SuccessStep({ uploadedFile }: SuccessStepProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(uploadedFile.filePath)
    toast.success('Link coppied to clipboard')
  }

  async function handleDownload() {
    const { data } = await axios.get(uploadedFile.filePath, {
      responseType: 'blob',
    })

    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = url
    link.download = uploadedFile.fileName
    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <>
      <div className="h-[334px] w-full max-w-xl rounded-lg bg-white p-2 shadow-main transition-all dark:bg-neutral-800">
        <img
          src={uploadedFile.filePath}
          alt="Uploaded image"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="mt-6 flex gap-2">
        <button
          onClick={handleCopyToClipboard}
          className="flex h-8 items-center justify-center gap-1 rounded-md bg-blue-500 px-3 text-xs font-semibold text-neutral-50"
        >
          <IconShare />
          Share
        </button>
        <button
          onClick={handleDownload}
          className="flex h-8 items-center justify-center gap-1 rounded-md bg-blue-500 px-3 text-xs font-semibold text-neutral-50"
        >
          <IconDownload />
          Download
        </button>
      </div>
    </>
  )
}
