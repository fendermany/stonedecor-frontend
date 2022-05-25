import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { classes } from '@/utils/classes'

import styles from '../Header.module.scss'

import { IMenuItem } from './../../Header/Menu/menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				['link']: true,
				[classes('menu__item', styles)]: true,
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a className={classes('menu__link', styles)}>{item.title}</a>
			</Link>
		</li>
	)
}
export default MenuItem
