import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { CategoryService } from '@/services/category.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminCategories = () => {
	const queryData = useQuery(
		'list of categories',
		() => CategoryService.getCategories(),
		{
			select: ({ data }) =>
				data.map(
					(category): IOption => ({
						label: category.name,
						value: category._id,
					})
				),
			onError(error) {
				toastError(error, 'categories list')
			},
		}
	)

	return queryData
}
