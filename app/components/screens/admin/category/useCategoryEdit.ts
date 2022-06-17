import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { CategoryService } from '@/services/category.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { ICategoryEditInput } from './category-edit.interface'

export const useCategoryEdit = (
	setValue: UseFormSetValue<ICategoryEditInput>
) => {
	const { push, query } = useRouter()

	const categoryId = String(query.id)

	const { isLoading } = useQuery(
		['category get by id', categoryId],
		() => CategoryService.getById(categoryId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Категория не получена')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update category',
		(data: ICategoryEditInput) => CategoryService.update(categoryId, data),
		{
			onError: (error) => {
				toastError(error, 'Категория не обновлена')
			},
			onSuccess() {
				toastr.success('Категория обновлена', 'обновление успешно')
				push(getAdminUrl('categories'))
			},
		}
	)

	const onSubmit: SubmitHandler<ICategoryEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
