import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from '../Footer.module.scss'

import { IMenuItem } from './../../Header/Menu/menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				['link']: true,
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>{item.title}</a>
			</Link>
		</li>
	)
}
export default MenuItem
