import Image from 'next/image'
import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from '../Footer.module.scss'

import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title, icon } }) => {
	return (
		<>
			<div className="footer__column">
				<h4 className="flex items-center">
					<Image src={icon} alt="products" draggable={false} />
					<span className="ml-2">{title}</span>
				</h4>
				<ul>
					{items.map((item) => (
						<MenuItem item={item} key={item.link} />
					))}
				</ul>
			</div>
		</>
	)
}
export default Menu
