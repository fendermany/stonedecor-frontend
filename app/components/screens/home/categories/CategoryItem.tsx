import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Description from '@/components/ui/heading/Description'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'

import { ICategoryItemProps } from './category.interface'

const CategoryItem: FC<ICategoryItemProps> = ({ category }) => {
	return (
		<li className={classes('home__products-item', styles)}>
			<div>
				<Box height={312} position="relative">
					<Image layout="fill" src={category.images} alt={category.title} />
				</Box>
				<h3>{category.title}</h3>
				<span>
					<Description text={category.description} />
				</span>
			</div>
			<Link href={category.link}>
				<a>
					<button type="button" className="button">
						Подробнее
					</button>
				</a>
			</Link>
		</li>
	)
}
export default CategoryItem
