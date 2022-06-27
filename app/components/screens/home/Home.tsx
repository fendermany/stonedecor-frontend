import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import Meta from '@/utils/meta/Meta'

import About from './about/About'
import Categories from './categories/Categories'
import Contacts from './contacts/Contacts'
import Examples from './examples/Examples'
import { IHome } from './home.types'
import Promo from './promo/Promo'

const Home: FC<IHome> = ({ slides, categories, examples }) => {
	return (
		<Layout wrapperName={'home'}>
			<Meta
				title="Декоративный камень для отделки интерьера"
				description="
Искусственный камень для декорирования дома и сада. Выбор любого цвета и оттенка. Более 25 видов облицовочной, цокольной и тротуарной плитки."
			>
				<Promo slides={slides} />
				<About />
				<Categories categories={categories} />
				<Contacts />
				<Examples examples={examples} />
			</Meta>
		</Layout>
	)
}

export default Home
