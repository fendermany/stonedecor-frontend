import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { ISlide } from '@/components/screens/home/promo/slider.interface'
import Product from '@/components/screens/product/Product'

import { IProduct } from '@/shared/types/product.types'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'

import { getCategoryUrl } from '@/config/url.config'

import ErrorPage404 from '../404'

export interface IProductPage {
	product: IProduct
	slides: ISlide[]
}

const ProductPage: NextPage<IProductPage> = ({ product, slides }) => {
	return product ? (
		<Product slides={slides} product={product} />
	) : (
		<ErrorPage404 />
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: product } = await ProductService.getProductBySlug(
			String(params?.slug)
		)

		const { data: categories } = await CategoryService.getCategories()

		const slides: ISlide[] = categories.map((c) => ({
			_id: c._id,
			link: getCategoryUrl(c.slug),
			subTitle: c.shortDescr,
			name: c.name,
			bigPoster: c.photos[Math.floor(Math.random() * c.photos.length)],
		}))

		return {
			props: {
				product,
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
		const { data: products } = await ProductService.getProducts()
		const paths = products.map((p) => ({
			params: { slug: p.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export default ProductPage
