import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Description from '@/components/ui/heading/Description'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'

import { ISlide, ISlider } from './slider.interface'

const Promo: FC<ISlider> = ({ slides, buttonTitle = 'Подробнее' }) => {
	const { push } = useRouter()

	return (
		<Swiper
			observer
			observeParents
			modules={[Pagination, EffectFade, Autoplay, A11y]}
			speed={1000}
			className={classes('home__promo-slider', styles)}
			wrapperTag="ul"
			effect="fade"
			autoplay={{
				delay: 20000,
				disableOnInteraction: false,
			}}
			pagination={{
				el: '.home__promo-slider-pagination',
				clickable: true,
			}}
		>
			{slides.map((slide: ISlide) => (
				<SwiperSlide key={slide._id} tag="li" className="swiper-slide -ibg">
					<Image
						layout="fill"
						src={slide.bigPoster}
						alt={slide.name}
						draggable={false}
						unoptimized
						priority
					/>
					<div className="home__container">
						<div className={classes('home__promo-title', styles)}>
							{slide.name}
						</div>
						<Description
							className={classes('home__promo-descr', styles)}
							text={slide.subTitle}
						/>
						<button
							onClick={() => push(slide.link)}
							type="button"
							className={cn({
								['button']: true,
								[classes('home__promo-btn', styles)]: true,
							})}
						>
							{buttonTitle}
						</button>
					</div>
				</SwiperSlide>
			))}
			<div className="home__promo-slider-pagination"></div>
		</Swiper>
	)
}
export default Promo
