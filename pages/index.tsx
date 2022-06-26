import { errorCatch } from 'api/api.helpers'
import type { NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { ICategoryItem } from '@/components/screens/home/categories/category.interface'
import { IHome } from '@/components/screens/home/home.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { IProduct } from '@/shared/types/product.types'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'

import { shuffle } from '@/utils/shuffle'

import {
	getCategoryUrl,
	getExamplesUrl,
	getProductUrl,
} from '@/config/url.config'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getProducts()
		const { data: dataCategories } = await CategoryService.getCategories()

		const slides: ISlide[] = shuffle(products)
			.slice(0, 5)
			.map((p: IProduct) => ({
				_id: p._id,
				link: getProductUrl(p.slug),
				subTitle: p.shortDescription,
				name: p.name,
				bigPoster: p.photos[Math.floor(Math.random() * p.photos.length)],
			}))

		const categories: ICategoryItem[] = dataCategories
			.filter((c) => c.image)
			.map((c) => ({
				title: c.name,
				description: c.shortDescr,
				images: c.image,
				link: getCategoryUrl(c.slug),
			}))

		const examples: ICategoryItem[] = dataCategories
			.filter((c) => c.photos.length)
			.map((c) => ({
				title: c.name,
				description: c.galleryDescr,
				images: c.photos,
				link: getExamplesUrl(c.slug),
			}))

		return {
			props: {
				slides,
				categories,
				examples,
			} as IHome,
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
				categories: [],
				examples: [],
			} as IHome,
		}
	}
}

export default HomePage
