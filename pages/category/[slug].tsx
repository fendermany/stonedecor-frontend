import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/screens/catalog/Catalog'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { ICategory } from '@/shared/types/category.types'
import { IProduct } from '@/shared/types/product.types'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'

import ErrorPage404 from '../404'

export interface ICategoryPage {
	products: IProduct[]
	category: ICategory
	slides: ISlide[]
}

const CategoryPage: NextPage<ICategoryPage> = ({
	products,
	category,
	slides,
}) => {
	return category ? (
		<Catalog slides={slides} category={category} products={products} />
	) : (
		<ErrorPage404 />
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: category } = await CategoryService.getBySlug(
			String(params?.slug)
		)

		const { data: products } = await ProductService.getByCategories([
			category._id,
		])

		const slides: ISlide[] = products.map((p) => ({
			_id: p._id,
			link: getProductUrl(p.slug),
			subTitle: p.shortDescription,
			name: p.name,
			bigPoster: p.photos[Math.floor(Math.random() * p.photos.length)],
		}))

		return {
			props: {
				products,
				category,
				slides,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: categories } = await CategoryService.getCategories()
		const paths = categories.map((c) => ({
			params: { slug: c.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export default CategoryPage
