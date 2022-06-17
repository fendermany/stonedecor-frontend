import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Footer/Menu/menu.interface'

import { CategoryService } from '@/services/category.service'

import { getCategoryUrl } from '@/config/url.config'

export const useCategoriesMenu = () => {
	const queryDataMenu = useQuery(
		'category list menu',
		() => CategoryService.getCategories(),
		{
			select: ({ data }) =>
				data.map(
					(category): IMenuItem => ({
						title: category.name,
						link: getCategoryUrl(category.slug),
					})
				),
		}
	)

	return queryDataMenu
}
