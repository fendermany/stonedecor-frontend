import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import { IContacts } from '@/components/screens/contacts/contacts.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { ProductService } from '@/services/product.service'

import { getCategoriesList } from '@/utils/product/getCategoriesList'

import { getProductUrl } from '@/config/url.config'

import Contacts from './../app/components/screens/contacts/Contacts'

const ContactsPage: NextPage<IContacts> = (props) => {
	return <Contacts {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getProducts()

		const slides: ISlide[] = products.slice(0, 3).map((p) => ({
			_id: p._id,
			link: getProductUrl(p.slug),
			subTitle: getCategoriesList(p.types),
			name: p.name,
			bigPoster: p.poster,
		}))

		return {
			props: {
				slides,
			} as IContacts,
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
			} as IContacts,
		}
	}
}

export default ContactsPage
