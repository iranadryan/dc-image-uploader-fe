import { useState } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'

import { LoadingStep } from './components/LoadingStep'
import { SuccessStep } from './components/SuccessStep'
import { UploadStep } from './components/UploadStep'

import UploadService, { UploadedFile } from './services/UploadService'
import { APIError } from './errors/APIError'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedFile, setUploadedFile] = useState<UploadedFile>({
    fileName: '',
    filePath: '',
  })

  async function handleUploadFile(file: File) {
    try {
      setCurrentStep(1)
      const data = await UploadService.upload(file)

      setUploadedFile({
        fileName: data.fileName,
        filePath: data.filePath,
      })

      setCurrentStep(2)
    } catch (err) {
      setCurrentStep(0)

      if (err instanceof APIError) {
        toast.error(err.message)
      }
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl bg-white px-8 py-9 shadow-main">
        {currentStep === 0 && <UploadStep onUpload={handleUploadFile} />}
        {currentStep === 1 && <LoadingStep />}
        {currentStep === 2 && <SuccessStep uploadedFile={uploadedFile} />}
      </div>
      <ToastContainer
        position="bottom-center"
        transition={Slide}
        autoClose={3000}
        closeButton={false}
        hideProgressBar
        closeOnClick
        toastStyle={{
          borderRadius: 12,
          padding: 16,
          minHeight: 'auto',
          maxHeight: 'auto',
          boxShadow: '0px 4px 12px 0px #0000001A',
        }}
        bodyStyle={{
          padding: 0,
          fontFamily: '"Poppins", sans-serif',
          fontSize: 14,
        }}
      />
    </div>
  )
}
