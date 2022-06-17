import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ProductService } from '@/services/product.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { IProductEditInput } from './product.interface'

export const useProductEdit = (
	setValue: UseFormSetValue<IProductEditInput>
) => {
	const { push, query } = useRouter()

	const productId = String(query.id)

	const { isLoading } = useQuery(
		['product', productId],
		() => ProductService.getById(productId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Продукт не получен')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update product',
		(data: IProductEditInput) => ProductService.update(productId, data),
		{
			onError: (error) => {
				toastError(error, 'Продукт не обновлен')
			},
			onSuccess() {
				toastr.success('Продукт обновлен', 'обновление успешно')
				push(getAdminUrl('products'))
			},
		}
	)

	const onSubmit: SubmitHandler<IProductEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
