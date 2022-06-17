import { additionalIcon, infoIcon, productsIcon } from '@/assets/img/images'

import { IMenu, IMenuItem } from './menu.interface'

export const footerMenu2: IMenu = {
	icon: infoIcon,
	title: 'Информация',
	items: [
		{
			link: '/info/installation',
			title: 'Установка',
		},
		{
			link: '/info/technology',
			title: 'Технология',
		},
		{
			link: '/info',
			title: 'Доставка',
		},
	],
}

export const footerMenu3: IMenu = {
	icon: additionalIcon,
	title: 'Дополнительно',
	items: [
		{
			link: '/policy',
			title: 'Политика конфидециальности',
		},
		{
			link: '/terms',
			title: 'Пользовательское соглашение',
		},
	],
}
