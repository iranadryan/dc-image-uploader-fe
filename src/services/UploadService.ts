import { api } from './utils/api'

export interface UploadedFile {
  fileName: string
  filePath: string
}

export interface UploadResponse extends UploadedFile {
  message: string
}

class UploadService {
  async upload(file: File) {
    const formData = new FormData()

    formData.append('image', file)

    const { data } = await api.post<UploadResponse>('/uploads', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  }
}

export default new UploadService()
