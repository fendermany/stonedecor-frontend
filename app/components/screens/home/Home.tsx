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
				title="Сделайте декор недорого и надолго"
				description="
Сделайте декор Вашего дома используя долговечные и красивые искусственные камни"
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
