import { useCallback } from 'react'
import imagePlaceholder from '../assets/image.svg'
import { FileRejection, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

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

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    multiple: false,
    noClick: true,
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
  })

  return (
    <>
      <h1 className="text-center text-lg font-medium tracking-tight text-neutral-900">
        Upload Your Image
      </h1>

      <p className="mt-4 text-center text-sm tracking-tight text-neutral-800">
        File should be jpg, jpeg or png
      </p>

      <section className="mt-8 flex flex-col items-center">
        <div
          className="flex h-56 flex-col items-center justify-center gap-4 self-stretch rounded-lg border border-dashed border-blue-300 bg-blue-50"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <img src={imagePlaceholder} alt="Image placeholder" />
          <span className="text-sm tracking-tight text-neutral-700">
            {isDragActive ? 'Drop your file' : 'Drag & Drop your image here'}
          </span>
        </div>

        <p className="my-3 text-center text-xs font-medium tracking-tight text-neutral-700">
          Or
        </p>

        <button
          onClick={open}
          className="h-10.5 rounded-lg bg-blue-500 px-4 text-sm font-semibold tracking-tight text-white transition-all hover:brightness-110"
        >
          Choose a file
        </button>
      </section>
    </>
  )
}
