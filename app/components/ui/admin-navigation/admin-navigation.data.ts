import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Продукция',
		link: getAdminUrl('products'),
	},
	{
		title: 'Категории',
		link: getAdminUrl('categories'),
	},
]
