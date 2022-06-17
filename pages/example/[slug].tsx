import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Example from '@/components/screens/example/Example'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { ICategory } from '@/shared/types/category.types'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'

import ErrorPage404 from '../404'

export interface IExamplePage {
	photos: string[]
	category: ICategory
	slides: ISlide[]
}

const CategoryPage: NextPage<IExamplePage> = ({ photos, category, slides }) => {
	return category ? (
		<Example slides={slides} category={category} photos={photos} />
	) : (
		<ErrorPage404 />
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: category } = await CategoryService.getBySlug(
			String(params?.slug)
		)

		const photos = category.photos

		const { data: products } = await ProductService.getByCategories([
			category._id,
		])

		const slides: ISlide[] = products.slice(0, 3).map((p) => ({
			_id: p._id,
			link: getProductUrl(p.slug),
			subTitle: p.shortDescription,
			name: p.name,
			bigPoster: p.poster,
		}))

		return {
			props: {
				photos,
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
