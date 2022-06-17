import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMenuItem } from '@/components/layout/Footer/Menu/menu.interface'
import { ITableItem } from '@/components/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { CategoryService } from '@/services/category.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl, getCategoryUrl } from '@/config/url.config'

export const useCategories = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['category list', debouncedSearch],
		() => CategoryService.getCategories(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(category): ITableItem => ({
						_id: category._id,
						editUrl: getAdminUrl(`category/edit/${category._id}`),
						items: [
							<Image width={50} height={50} src={category.image} />,
							category.name,
							category.countProducts,
						],
					})
				),
			onError(error) {
				toastError(error, 'category list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create category',
		() => CategoryService.create(),
		{
			onError(error) {
				toastError(error, 'Категория не создана')
			},
			onSuccess({ data: _id }) {
				toastr.success('Категория создана', 'Создание прошло успешно')
				push(getAdminUrl(`category/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete category',
		(categoryId: string) => CategoryService.delete(categoryId),
		{
			onError(error) {
				toastError(error, 'Категория не удалена')
			},
			onSuccess() {
				toastr.success('Категория удалена', 'Удаление прошло успешно')
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
