import { useEffect } from 'react'
import { useMutation } from 'react-query'

import { ProductService } from '@/services/product.service'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update count', () =>
		ProductService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
