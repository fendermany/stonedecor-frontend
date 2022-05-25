import { additionalIcon, infoIcon, productsIcon } from '@/assets/img/images'

import { IMenu } from './menu.interface'

export const footerMenu1: IMenu = {
	icon: productsIcon,
	title: 'Продукция',
	items: [
		{
			link: '/category/:id',
			title: 'Облицовочная плита',
		},
		{
			link: '/category/:id',
			title: 'Цокольная плита',
		},
		{
			link: '/category/:id',
			title: 'Тротуарная плита',
		},
		{
			link: '/category/:id',
			title: 'Предметы интерьера',
		},
	],
}

export const footerMenu2: IMenu = {
	icon: infoIcon,
	title: 'Информация',
	items: [
		{
			link: '/info/placing',
			title: 'Установка',
		},
		{
			link: '/info/technology',
			title: 'Технология',
		},
		{
			link: '/info/delivery',
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
