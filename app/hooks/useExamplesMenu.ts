import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Footer/Menu/menu.interface'

import { CategoryService } from '@/services/category.service'

import { getExamplesUrl } from '@/config/url.config'

export const useExamplesMenu = () => {
	const queryDataMenu = useQuery(
		'examples list menu',
		() => CategoryService.getCategories(),
		{
			select: ({ data }) =>
				data.map(
					(category): IMenuItem => ({
						title: category.name,
						link: getExamplesUrl(category.slug),
					})
				),
		}
	)

	return queryDataMenu
}
