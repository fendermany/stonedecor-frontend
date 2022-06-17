import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import { A11y, EffectFade, Navigation, Pagination, Thumbs } from 'swiper'
import type { Swiper as SwiperCore } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IProduct } from '@/shared/types/product.types'

import { classes } from '@/utils/classes'

import styles from './Product.module.scss'

interface IProductSlider {
	product: IProduct
}

const ProductSlider: FC<IProductSlider> = ({ product }) => {
	const [productSwiper, setProductSwiper] = useState<SwiperCore | null>(null)
	const [productSwiperThumbs, setProductSwiperThumbs] =
		useState<SwiperCore | null>(null)

	return (
		<>
			<Swiper
				observer
				observeParents
				loop={true}
				loopedSlides={5}
				slidesPerView={1}
				spaceBetween={0}
				thumbs={{ swiper: productSwiperThumbs }}
				onSwiper={setProductSwiper}
				onSlideChangeTransitionStart={() => {
					productSwiperThumbs &&
						productSwiper &&
						productSwiperThumbs.slideTo(productSwiper.activeIndex)
				}}
				modules={[Pagination, Navigation, Thumbs, EffectFade, A11y]}
				speed={1000}
				className={classes('product__slider', styles)}
				wrapperTag="ul"
				slideToClickedSlide
				effect="fade"
				navigation={{
					prevEl: '.product__thumbs-prev',
					nextEl: '.product__thumbs-next',
				}}
				pagination={{
					el: '.product__slider-pagination',
					clickable: true,
				}}
			>
				{product.photos.map((photo, idx) => (
					<SwiperSlide key={`photo ${idx}`} tag="li" className="swiper-slide">
						<Image
							layout="fill"
							src={photo}
							alt={`${product.name}-${idx}`}
							draggable={false}
							unoptimized
							priority
						/>
					</SwiperSlide>
				))}
				<div className="product__slider-pagination"></div>
			</Swiper>
			<Swiper
				observer
				loop={true}
				loopedSlides={5}
				observeParents
				modules={[Pagination, Navigation, Thumbs, EffectFade, A11y]}
				onSwiper={setProductSwiperThumbs}
				onSlideChangeTransitionStart={() => {
					productSwiperThumbs &&
						productSwiper &&
						productSwiper.slideTo(productSwiperThumbs.activeIndex)
				}}
				speed={1000}
				slidesPerView={3}
				spaceBetween={0}
				className={cn('product__thumbs', classes('product__thumbs', styles))}
				wrapperTag="ul"
				watchSlidesProgress
				effect="fade"
				pagination={{
					el: '.product__thumbs-pagination',
					type: 'fraction',
				}}
			>
				{product.photos.map((photo, idx) => (
					<SwiperSlide
						key={`thumbnail ${idx}`}
						tag="li"
						className="swiper-slide"
					>
						<Image
							layout="fill"
							src={photo}
							alt={`${product.name}-${idx}`}
							draggable={false}
							unoptimized
							priority
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="product__thumbs-pagination"></div>
		</>
	)
}

export default ProductSlider
