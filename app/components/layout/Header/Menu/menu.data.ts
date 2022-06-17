import { IMenu } from './menu.interface'

export const HeaderMenu: IMenu = {
	items: [
		{
			link: '/info',
			title: 'Информация',
			submenu: [
				{
					title: 'Установка',
					link: '/info/installation',
				},
				{
					title: 'Технология',
					link: '/info/technology',
				},
				{
					title: 'Оплата и доставка',
					link: '/info',
				},
			],
		},
		{
			link: '/contacts',
			title: 'Контакты',
		},
		{
			link: '/about',
			title: 'О нас',
		},
	],
}
