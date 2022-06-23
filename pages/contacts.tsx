import { errorCatch } from 'api/api.helpers'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'

import { IContacts } from '@/components/screens/contacts/contacts.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { IProduct } from '@/shared/types/product.types'

import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'

import Contacts from './../app/components/screens/contacts/Contacts'
import { shuffle } from './../app/utils/shuffle'

const ContactsPage: NextPage<IContacts> = (props) => {
	return <Contacts {...props} />
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
			},
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
			},
		}
	}
}

export default ContactsPage
