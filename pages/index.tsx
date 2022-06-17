import { errorCatch } from 'api/api.helpers'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Home from '@/components/screens/home/Home'
import { ICategoryItem } from '@/components/screens/home/categories/category.interface'
import { IHome } from '@/components/screens/home/home.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'

import { getCategoriesList } from '@/utils/product/getCategoriesList'

import {
	getCategoryUrl,
	getExamplesUrl,
	getProductUrl,
} from '@/config/url.config'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
	try {
		const { data: products } = await ProductService.getProducts()
		const { data: dataCategories } = await CategoryService.getCategories()

		const slides: ISlide[] = products.map((p) => ({
			_id: p._id,
			link: getProductUrl(p.slug),
			subTitle: getCategoriesList(p.types),
			name: p.name,
			bigPoster: p.poster,
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
				...(await serverSideTranslations(locale, ['home', 'header', 'footer'])),
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
