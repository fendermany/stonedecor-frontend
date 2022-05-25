import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from '../Header.module.scss'

import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<div className={classes('header__menu menu', styles)}>
			<nav className={classes('menu__body', styles)}>
				<ul className={classes('menu__list', styles)}>
					{items.map((item) => (
						<MenuItem item={item} key={item.link} />
					))}
				</ul>
			</nav>
		</div>
	)
}
export default Menu
