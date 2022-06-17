import { Masonry } from '@mui/lab'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import Breadcrumbs from '@/components/layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layout/Layout'
import PromoSlider from '@/components/layout/PromoSlider/PromoSlider'
import Heading from '@/components/ui/heading/Heading'

import { title } from '@/assets/img/images'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import { IExamplePage } from '../../../../pages/example/[slug]'

import styles from './Example.module.scss'

const Example: FC<IExamplePage> = ({ slides, category, photos }) => {
	return (
		<Layout wrapperName="examples header-black">
			<Meta title={category.name} description={category.description}>
				<PromoSlider slides={slides} />

				<Breadcrumbs title={category.name} />
				<div className={classes('examples__main', styles)}>
					<div className="examples__container">
						<div
							className={cn('title', classes('examples__title title', styles))}
						>
							<Image src={title} alt={category.name} />
							<Heading className="ml-2" title={category.name} />
						</div>
						<div className={classes('examples__body', styles)}>
							<Masonry columns={{ sm: 2 }} spacing={2}>
								{photos.map((photo, index) => (
									<div
										key={index}
										className={classes('examples__item', styles)}
									>
										<img src={photo} alt={`${category.name} photo #${index}`} />
									</div>
								))}
							</Masonry>
						</div>
					</div>
				</div>
			</Meta>
		</Layout>
	)
}

export default Example
