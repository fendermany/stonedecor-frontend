import { FC } from 'react'

import { useExamplesMenu } from '@/hooks/useExamplesMenu'

import { classes } from '@/utils/classes'

import { useCategoriesMenu } from '../../../../hooks/useCategoriesMenu'
import styles from '../Header.module.scss'

import MenuItemComponent from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	const { data: categories } = useCategoriesMenu()
	const { data: examples } = useExamplesMenu()

	const products = {
		link: '/category',
		title: 'Продукция',
		submenu: categories || [],
	}

	const examplesMenu = {
		link: '/example',
		title: 'Примеры работ',
		submenu: examples || [],
	}

	return (
		<div className={classes('header__menu menu', styles)}>
			<nav className={classes('menu__body', styles)}>
				<ul className={classes('menu__list', styles)}>
					<MenuItemComponent item={products} />
					<MenuItemComponent item={examplesMenu} />
					{items.map((item) => (
						<MenuItemComponent item={item} key={item.link} />
					))}
				</ul>
			</nav>
		</div>
	)
}
export default Menu
