import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import InfoTemplate from '@/components/layout/InfoTemplate/InfoTemplate'
import {
	IInfoProps,
	IInfoTemplate,
} from '@/components/layout/InfoTemplate/info.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { IProduct } from '@/shared/types/product.types'

import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'

import { shuffle } from './../app/utils/shuffle'

const AboutPage: NextPage<IInfoTemplate> = (props) => {
	return (
		<InfoTemplate
			{...props}
			title="О компании"
			description="OÜ StoneDecor предприятие, созданное в апреле 2011 года, производство начало выпуск первой продукции с мая 2011 года."
			content={<Content />}
		/>
	)
}

export const Content = () => {
	return (
		<>
			<p>
				OÜ StoneDecor предприятие, созданное в апреле 2011 года, производство
				начало выпуск первой продукции с мая 2011 года.
			</p>
			<p>
				Мы рады предложить Вам свою продукцию — декоративный отделочный камень,
				изготовленный методом вибролитья. Этот отделочный материал, выходящий из
				рук мастеров, удивительно схож со своим природным аналогом, а по
				прочности уступает только граниту.
			</p>
			<p>В нашем ассортименте:</p>
			<ul>
				<li>Цокольный и фасадный камень</li>
				<li>Камень и плитка для внутренней отделки</li>
				<li>Садовая плитка и тротуарный камень</li>
				<li>
					Искусственный мрамор, гранит, малые архитектурные формы (облицовка
					камина, вазоны, скамейки и т.д.)
				</li>
			</ul>
			<p>
				Наша визитная карточка – разнообразный ассортимент выпускаемой
				продукции, короткие сроки изготовления и оперативность доставки.
			</p>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getProducts()

		const slides: ISlide[] = shuffle(products)
			.slice(0, 5)
			.map((p: IProduct) => ({
				_id: p._id,
				link: getProductUrl(p.slug),
				subTitle: p.shortDescription,
				name: p.name,
				bigPoster: p.poster,
			}))

		return {
			props: {
				slides,
			} as IInfoProps,
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
			} as IInfoProps,
		}
	}
}

export default AboutPage
