import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ProductService } from '@/services/product.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getCategoriesList } from '@/utils/product/getCategoriesList'

import { getAdminUrl } from '@/config/url.config'

export const useProducts = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['product list', debouncedSearch],
		() => ProductService.getProducts(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(product): ITableItem => ({
						_id: product._id,
						editUrl: getAdminUrl(`product/edit/${product._id}`),
						items: [
							<Image width={50} height={50} src={product.poster}></Image>,
							product.name,
							getCategoriesList(product.types),
						],
					})
				),
			onError(error) {
				toastError(error, 'product list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create product',
		() => ProductService.create(),
		{
			onError(error) {
				toastError(error, 'Продукт не создан')
			},
			onSuccess({ data: _id }) {
				toastr.success('Продукт создан', 'Создание прошло успешно')
				push(getAdminUrl(`product/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete product',
		(productId: string) => ProductService.delete(productId),
		{
			onError(error) {
				toastError(error, 'Продукт не удален')
			},
			onSuccess() {
				toastr.success('Продукт удален', 'Удаление прошло успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
