import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	value: any,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUploadPhoto: TypeUpload = (onChange, folder, value) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(value?.concat(data[0].url))
			},
			onError: (error) => {
				toastError(error, 'Загрузка файла')
			},
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			await mutateAsync(formData)
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			uploadFile,
			isLoading,
		}),
		[uploadFile, isLoading]
	)
}