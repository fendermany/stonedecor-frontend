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

import { getCategoriesList } from '@/utils/product/getCategoriesList'
import { shuffle } from '@/utils/shuffle'

import { getProductUrl } from '@/config/url.config'

const InfoPage: NextPage<IInfoTemplate> = (props) => {
	return (
		<InfoTemplate
			{...props}
			title="Оплата и доставка"
			description="Вы можете бесплатно забрать свой заказ самостоятельно. Мы также осуществляем доставку в Ida-Virumaa и по Эстонии."
			content={<Content />}
		/>
	)
}

export const Content = () => {
	return (
		<>
			<p>
				Оплата заказанной продукции производится в евро, наличными деньгами или
				безналичным способом, путём перевода средств на расчётный счёт компании.
			</p>
			<p>
				Вы можете бесплатно забрать свой заказ самостоятельно. Мы также
				осуществляем доставку в Ida-Virumaa и по Эстонии. Стоимость доставки
				рассчитывается в зависимости от объёма заказа, его веса, а также
				километража. Более подробную информацию уточняйте по телефону{' '}
				<a href="tel:+37253408960">+372 53 40 89 60</a> или напишите на почту{' '}
				<a href="mailto:info@stonedecor.eu">info@stonedecor.eu</a>
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

export default InfoPage
