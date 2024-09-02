import { useCallback } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { IconUpload } from './icons/IconUpload'

interface UploadStepProps {
  onUpload: (file: File) => void
}

export function UploadStep({ onUpload }: UploadStepProps) {
  const onDropAccepted = useCallback(
    async (acceptedFiles: File[]) => {
      onUpload(acceptedFiles[0])
    },
    [onUpload],
  )

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    if (fileRejections.length > 1) {
      return toast.error('Please select one file at a time')
    }

    toast.error('Invalid file, please use an image')
  }, [])

  const { getRootProps, getInputProps, open } = useDropzone({
    onDropAccepted,
    onDropRejected,
    multiple: false,
    noClick: true,
    maxFiles: 1,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
    },
  })

  return (
    <div className="h-[334px] w-full max-w-xl rounded-lg bg-white p-2 shadow-main transition-all dark:bg-neutral-800">
      <div
        className="flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed border-neutral-100 transition-all dark:border-neutral-700"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <IconUpload />
        <strong className="mt-5 text-sm font-medium leading-tight tracking-tight text-neutral-950 transition-all dark:text-neutral-50/80">
          Drag & drop a file or{' '}
          <button onClick={open} className="text-blue-500">
            browse files
          </button>
        </strong>
        <p className="mt-2 text-xs font-light leading-tight tracking-tight text-neutral-950 transition-all dark:text-neutral-50/80">
          JPG, PNG or GIF - Max file size 2MB
        </p>
      </div>
    </div>
  )
}
