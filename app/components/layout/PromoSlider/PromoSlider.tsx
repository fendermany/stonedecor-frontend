import Image from 'next/image'
import { FC } from 'react'
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ISlide } from '@/components/screens/home/promo/slider.interface'
import Description from '@/components/ui/heading/Description'

export interface IPromoSLider {
	slides: ISlide[]
}

const PromoSlider: FC<IPromoSLider> = ({ slides }) => {
	return (
		<div className="promo">
			<Swiper
				observer
				observeParents
				modules={[Pagination, EffectFade, Autoplay, A11y]}
				speed={1000}
				className="promo-slider"
				wrapperTag="ul"
				effect="fade"
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					el: '.promo-slider-pagination',
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
						<div className="promo__container">
							<div className="promo-title">{slide.name}</div>
							<Description text={slide.subTitle} className="promo-descr" />
						</div>
					</SwiperSlide>
				))}
				<div className="promo-slider-pagination"></div>
			</Swiper>
		</div>
	)
}

export default PromoSlider
