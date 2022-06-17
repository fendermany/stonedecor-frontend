import { Box } from '@mui/material'
import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Description from '@/components/ui/heading/Description'

import { title } from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from '../Home.module.scss'
import { ICategoryItem } from '../categories/category.interface'

const Examples: FC<{ examples: ICategoryItem[] }> = ({ examples }) => {
	const { push } = useRouter()

	return (
		<div className={classes('home__examples', styles)}>
			<div className="home__container">
				<h2 className="title">
					<Image src={title} alt="Примеры работ" />
					<span className="ml-4">Примеры работ</span>
				</h2>
				<ul className={classes('home__examples-list', styles)}>
					{examples.map((example, idx) => (
						<li
							key={`example ${idx}`}
							className={cn('min-w-0', classes('home__examples-item', styles))}
						>
							<Swiper
								modules={[EffectFade, Autoplay]}
								effect="fade"
								autoplay={{
									delay: 7000,
									disableOnInteraction: false,
								}}
							>
								{example.images.map((el: string, idx: number) => (
									<SwiperSlide key={`${example.title} ${idx}`}>
										<Box height={312} position="relative">
											<Image layout="fill" src={el} alt={example.title} />
										</Box>
									</SwiperSlide>
								))}
							</Swiper>
							<h3>{example.title}</h3>
							<span>
								<Description text={example.description} />
							</span>
							<button
								onClick={() => push(example.link)}
								type="button"
								className="button"
							>
								Смотреть
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default Examples
