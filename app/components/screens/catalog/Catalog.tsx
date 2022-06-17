import { Box } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import Breadcrumbs from '@/components/layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layout/Layout'
import PromoSlider from '@/components/layout/PromoSlider/PromoSlider'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import { IProduct } from '@/shared/types/product.types'

import { promo, title } from '@/assets/img/images'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import { ICategoryPage } from '../../../../pages/category/[slug]'
import { ISlide } from '../home/promo/slider.interface'

import styles from './Catalog.module.scss'
import CatalogItem from './CatalogItem'

export interface ICategoryItem {
	name: string
	description: string
	image: string
	products: IProduct[]
}

const Catalog: FC<ICategoryPage> = ({ slides, category, products }) => {
	return (
		<Layout wrapperName="category header-black">
			<Meta title={category.name} description={category.description}>
				<PromoSlider slides={slides} />
				<Breadcrumbs title={category.name} />
				<div className={classes('category__description', styles)}>
					<div className="category__container">
						<div className="title">
							<Image src={title} alt={category.name} />
							<Heading className="ml-2" title={category.name} />
						</div>
						<div className={classes('category__description-wrapper', styles)}>
							<div className={classes('category__description-img', styles)}>
								<Box height={300} position="relative">
									<Image
										src={category.image}
										alt={category.name}
										layout="fill"
									/>
								</Box>
							</div>
							<div className={classes('category__description-body', styles)}>
								<div className={classes('category__description-text', styles)}>
									<Description text={category.description} />
								</div>
							</div>
						</div>
					</div>
				</div>
				{products.length ? (
					<div className={classes('category__list', styles)}>
						<div className="category__container">
							<ul className={classes('category__list-body', styles)}>
								{products.map((product) => (
									<CatalogItem key={product._id} product={product} />
								))}
							</ul>
						</div>
					</div>
				) : (
					<div className={classes('category__list', styles)}>
						<div className="category__container !mt-8">Раздел пуст</div>
					</div>
				)}
			</Meta>
		</Layout>
	)
}

export default Catalog
