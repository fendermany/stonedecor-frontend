import Image from 'next/image'
import { FC } from 'react'

import { ICategoryItem } from '@/components/screens/home/categories/category.interface'

import { title } from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'

import CategoryItem from './CategoryItem'

const Categories: FC<{ categories: ICategoryItem[] }> = ({ categories }) => {
	return (
		<div className={classes('home__products', styles)}>
			<div className="home__container">
				<h2 className="title">
					<Image src={title} alt="Наша продукция" />
					<span className="ml-4">Наша продукция</span>
				</h2>
				<ul className={classes('home__products-list', styles)}>
					{categories
						? categories.map((category) => (
								<CategoryItem category={category} key={category.link} />
						  ))
						: []}
				</ul>
			</div>
		</div>
	)
}
export default Categories
