import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { ISlide } from '@/components/screens/home/promo/slider.interface'
import Product from '@/components/screens/product/Product'

import { IProduct } from '@/shared/types/product.types'

import { ProductService } from '@/services/product.service'

import { shuffle } from '@/utils/shuffle'

import { getProductUrl } from '@/config/url.config'

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

		const { data: products } = await ProductService.getProducts()

		const slides: ISlide[] = shuffle(products)
			.slice(0, 5)
			.map((p: IProduct) => ({
				_id: p._id,
				link: getProductUrl(p.slug),
				subTitle: p.shortDescription,
				name: p.name,
				bigPoster: p.photos[Math.floor(Math.random() * p.photos.length)],
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
