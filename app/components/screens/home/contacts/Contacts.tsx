import Image from 'next/image'
import { FC } from 'react'

import FeedbackForm from '@/components/ui/feedback-form/FeedbackForm'

import { feedback, title } from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'

const Contacts: FC = () => {
	return (
		<div className={classes('home__contacts', styles)}>
			<div className="home__container">
				<div className={classes('home__contacts-wrapper', styles)}>
					<h2 className="title">
						<Image src={title} alt="Наша продукция" />
						<span className="ml-4">Свяжитесь с нами</span>
					</h2>
					<FeedbackForm id="home-form" />
					<div className={classes('home__contacts-img', styles)}>
						<Image src={feedback} alt="feedback" />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Contacts
