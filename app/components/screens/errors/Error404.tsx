import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import { classes } from '@/utils/classes'
import Meta from '@/utils/meta/Meta'

import styles from './Error404.module.scss'

const Error404: FC = () => {
	const router = useRouter()

	return (
		<Meta title="Page not found">
			<div className="wrapper">
				<div className={classes('page404__container', styles)}>
					<div className={classes('page404__wrapper', styles)}>
						<div className={classes('page404__header', styles)}>
							<Link href="/">
								<a className={classes('page404__logo', styles)}>
									<span>Stone</span>
									<span>decor</span>
								</a>
							</Link>
						</div>
						<div className={classes('page404__body', styles)}>
							<div className={classes('page404__title', styles)}>404</div>
							<Heading
								title="Страница не найдена"
								className={classes('page404__descr', styles)}
							/>
							<button
								onClick={() => router.back()}
								type="button"
								className={cn({
									['button']: true,
									[classes('page404__btn', styles)]: true,
								})}
							>
								Назад
							</button>
						</div>
						<div className={classes('page404__footer', styles)}></div>
					</div>
				</div>
			</div>
		</Meta>
	)
}
export default Error404
