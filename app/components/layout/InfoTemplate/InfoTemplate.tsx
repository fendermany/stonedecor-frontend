import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import { title as titleImg } from '@/assets/img/images'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Layout from '../Layout'
import PromoSlider from '../PromoSlider/PromoSlider'

import styles from './InfoPage.module.scss'
import { IInfoTemplate } from './info.types'

const InfoTemplate: FC<IInfoTemplate> = ({
	slides,
	title,
	description,
	content,
}) => {
	return (
		<Layout wrapperName="info header-black">
			<Meta title={title} description={description}>
				<PromoSlider slides={slides} />
				<Breadcrumbs title={title} />
				<div className={classes('info__main', styles)}>
					<div className="info__container">
						<div className={cn('title', classes('info__title', styles))}>
							<Image src={titleImg} alt={title} />
							<Heading className="ml-2" title={title} />
						</div>
						<div className={classes('info__content', styles)}>{content}</div>
					</div>
				</div>
			</Meta>
		</Layout>
	)
}

export default InfoTemplate
