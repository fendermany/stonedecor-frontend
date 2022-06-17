import cn from 'classnames'
import Image from 'next/image'
import { CModalProvider } from 'providers/ModalProvider/ModalProvider'
import { FC, useContext } from 'react'
import { A11y, Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
	about,
	aboutList1,
	aboutList2,
	aboutList3,
	aboutList4,
	aboutList5,
	aboutList6,
	sliderNext,
	sliderPrev,
	title,
} from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'

const About: FC = () => {
	const { setModal } = useContext(CModalProvider)

	return (
		<div className={classes('home__about', styles)}>
			<div className="home__container">
				<h2 className="title">
					<Image src={title} alt="О нас" />
					<span className="ml-4">О нас</span>
				</h2>
				<div className={classes('home__about-wrapper', styles)}>
					<ul className={classes('home__about-list', styles)}>
						<li>
							<Image
								src={aboutList1}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
						<li>
							<Image
								src={aboutList2}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
						<li>
							<Image
								src={aboutList3}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
						<li>
							<Image
								src={aboutList4}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
						<li>
							<Image
								src={aboutList5}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
						<li>
							<Image
								src={aboutList6}
								alt="Прежде всего, современная методология разработки требует анализа инновационных методов управления процессами"
							/>
							<span>
								Прежде всего, современная методология разработки требует анализа
								инновационных методов управления процессами
							</span>
						</li>
					</ul>
					<Swiper
						observer
						observeParents
						modules={[Navigation, EffectFade, Autoplay, A11y]}
						speed={1000}
						className={classes('home__about-slider', styles)}
						wrapperTag="ul"
						effect="fade"
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						navigation={{
							prevEl: '.home__about-slider--prev',
							nextEl: '.home__about-slider--next',
						}}
					>
						<SwiperSlide tag="li" className="swiper-slide">
							<Image src={about} alt="О нас" />
						</SwiperSlide>
						<SwiperSlide tag="li" className="swiper-slide">
							<Image src={about} alt="О нас" />
						</SwiperSlide>
						<SwiperSlide tag="li" className="swiper-slide">
							<Image src={about} alt="О нас" />
						</SwiperSlide>
						<div className={classes('home__about-slider--navigation', styles)}>
							<div className="home__about-slider--prev">
								<Image src={sliderPrev} alt="prev" />
							</div>
							<div className="home__about-slider--next">
								<Image src={sliderNext} alt="next" />
							</div>
						</div>
					</Swiper>
				</div>
				<button
					onClick={() => setModal({ show: true })}
					type="button"
					className={cn({
						['button']: true,
						[classes('home__about-btn', styles)]: true,
					})}
				>
					Заказать
				</button>
			</div>
		</div>
	)
}
export default About
