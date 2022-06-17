import { Box } from '@mui/material'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Breadcrumbs from '@/components/layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layout/Layout'
import PromoSlider from '@/components/layout/PromoSlider/PromoSlider'

import {
	facebook,
	mailYellow,
	phoneYellow,
	title,
	viber,
	whatssapp,
} from '@/assets/img/images'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import Heading from './../../ui/heading/Heading'
import styles from './Contacts.module.scss'
import { IContacts } from './contacts.types'

const containerStyle = {
	maxWidth: '767px',
	width: '100%',
	height: '400px',
	position: 'relative',
	marginTop: '14px',
}

const Contacts: FC<IContacts> = ({ slides }) => {
	return (
		<Layout wrapperName="contacts header-black">
			<Meta
				title="Контакты"
				description="Мы находимся в Эстония, Ида-Вирумаа, Силламяж"
			>
				<PromoSlider slides={slides} />
				<Breadcrumbs title="Контакты" />
				<div className={classes('contacts__main', styles)}>
					<div className="contacts__container">
						<div className="title mt-12">
							<Image src={title} alt="Контакты" />
							<Heading className="ml-2" title="Контакты" />
						</div>
						<div
							className={cn(
								'footer__column',
								classes('contacts__body', styles)
							)}
						>
							<span>StoneDecor OÜ</span>
							<span>Reg. nr: 12086917</span>
							<span>
								<Image src={phoneYellow} alt="+37253408960" />
								<a className="ml-2 link" href="tel:+37253408960">
									+37253408960
								</a>
							</span>
							<span>
								<Image src={mailYellow} alt="info@stonedecor.eu" />
								<a className="ml-2 link" href="mailto:info@stonedecor.eu">
									info@stonedecor.eu
								</a>
							</span>
							<ul className="social">
								<li>
									<Link href="#">
										<a>
											<Image src={facebook} alt="facebook" />
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<Image src={whatssapp} alt="whatsapp" />
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<Image src={viber} alt="viber" />
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<button
							type="submit"
							className={cn('button', classes('contacts__btn', styles))}
						>
							Напишите нам
						</button>
						<div className={classes('contacts__map', styles)}>
							<div className={classes('contacts__map-title', styles)}>
								Адрес склада и демонстрационного зала:
							</div>
							<Box sx={containerStyle} id="map">
								<iframe
									width="100%"
									height="100%"
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1016.0685976622966!2d27.751941366724765!3d59.3807377552433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2057eeeaf9f69586!2sStoneDecor!5e0!3m2!1sru!2sus!4v1654757648616!5m2!1sru!2sus"
									allowFullScreen={true}
									loading="lazy"
									className="mt-3"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</Box>
						</div>
					</div>
				</div>
			</Meta>
		</Layout>
	)
}

export default Contacts
