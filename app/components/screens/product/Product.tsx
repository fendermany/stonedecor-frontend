import cn from 'classnames'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { CModalProvider } from 'providers/ModalProvider/ModalProvider'
import { FC, useContext } from 'react'

import Breadcrumbs from '@/components/layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layout/Layout'
import PromoSlider from '@/components/layout/PromoSlider/PromoSlider'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import { sliderNext, sliderPrev } from '@/assets/img/images'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import { IProductPage } from '../../../../pages/product/[slug]'

import styles from './Product.module.scss'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicProductSlider = dynamic(() => import('./ProductSlider'), {
	ssr: false,
})

const Product: FC<IProductPage> = ({ product, slides }) => {
	const { setModal } = useContext(CModalProvider)
	useUpdateCountOpened(product.slug)
	return (
		<Layout wrapperName="product header-black">
			<Meta title={product.name} description={product.shortDescription}>
				<PromoSlider slides={slides} />
				<Breadcrumbs title={product.name} />
				<div className={classes('product__main', styles)}>
					<div className="product__container">
						<div className={classes('product__wrapper', styles)}>
							<div className={classes('product__body', styles)}>
								<DynamicProductSlider product={product} />
								<div className={classes('product__main-inner', styles)}>
									<Heading
										title={product.name}
										className={classes('product__title', styles)}
									/>
									<div
										className={classes('product__thumbs-navigation', styles)}
									>
										<div className="product__thumbs-prev">
											<Image src={sliderPrev} alt="slider-prev" />
										</div>
										<div className="product__thumbs-next">
											<Image src={sliderNext} alt="slider-prev" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<button
							onClick={() => setModal({ show: true, product: product.name })}
							className={cn({
								[classes('product__main-btn', styles)]: true,
								['button']: true,
							})}
						>
							Заказать
						</button>
					</div>
				</div>
				<div className={classes('product__content', styles)}>
					<div className="product__container">
						<div className={classes('product__content-wrapper', styles)}>
							<div className={classes('product__content-body', styles)}>
								<Description text={product.description} />
							</div>
							<button
								onClick={() => setModal({ show: true, product: product.name })}
								type="button"
								className={cn({
									[classes('product__content-btn', styles)]: true,
									['button']: true,
								})}
							>
								Заказать
							</button>
						</div>
					</div>
				</div>
			</Meta>
		</Layout>
	)
}

export default Product
