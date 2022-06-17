import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect } from 'react'

import Button from '@/components/ui/form-elements/Button'

import { useAuth } from '@/hooks/useAuth'
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter'
import { useRenderClient } from '@/hooks/useRenderClient'

import { mail, phone } from '@/assets/img/images'

import { classes } from '@/utils/classes'

import { getAdminHomeUrl } from './../../../config/url.config'
import styles from './Header.module.scss'
import Menu from './Menu/Menu'
import { HeaderMenu } from './Menu/menu.data'

const scrollOptions = {
	reserveScrollBarGap: true,
}

const Header: FC = () => {
	const { user } = useAuth()
	const { isRenderClient } = useRenderClient()

	const { isComponentVisible, setIsComponentVisible } = useOutsideAlerter(false)

	useEffect(() => {
		const targetElement = document.body

		isComponentVisible
			? disableBodyScroll(targetElement, scrollOptions)
			: enableBodyScroll(targetElement)
	}, [isComponentVisible])

	return (
		<header
			className={cn(
				{ [styles['menu-open']]: isComponentVisible },
				classes('header', styles)
			)}
		>
			<div className={classes('header__top', styles)}>
				<div className="header__container">
					<div className={classes('header__top-wrapper', styles)}>
						<div
							className={cn({
								['flex items-center']: true,
								[classes('header__top-left', styles)]: true,
							})}
						>
							<div className={classes('header__top-name', styles)}>
								StoneDecor OÜ
							</div>
							{isRenderClient && user && (
								<Link href={getAdminHomeUrl()}>
									<a className="ml-4 h-4">
										<Button className="h-4 !pt-0 !pb-0 !pl-2 !pr-2">
											Редактировать
										</Button>
									</a>
								</Link>
							)}
						</div>
						<div className={classes('header__top-right', styles)}>
							<Link
								href="mailto:info@stonedecor.eu"
								className={classes('header__top-email link', styles)}
							>
								<a className="flex items-center link">
									<Image src={mail} alt="email" draggable={false} />
									<span className="ml-2">info@stonedecor.eu</span>
								</a>
							</Link>
							<Link
								href="tel:+37253408960"
								className={classes('header__top-phone link', styles)}
							>
								<a className="flex items-center link">
									<Image src={phone} alt="phone" draggable={false} />
									<span className="ml-2">+372 53 40 89 60</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={classes('header__wrapper', styles)}>
				<div className="header__container">
					<div className={classes('header__body', styles)}>
						<button
							type="button"
							onClick={() => setIsComponentVisible(!isComponentVisible)}
							className={classes('menu__icon icon-menu', styles)}
						>
							<span></span>
						</button>
						<div className={classes('header__logo', styles)}>
							<Link href="/">
								<a>
									<span>Stone</span>
									<span>Decor</span>
								</a>
							</Link>
						</div>
						<Menu menu={HeaderMenu} />
						<div className={classes('header__lang', styles)}>
							{/* <select name="form[]" className={classes('form', styles)}>
								<option data-asset="img/rus.svg" defaultValue="1">
									RU
								</option>
								<option data-asset="img/rus.svg" defaultValue="2">
									EE
								</option>
							</select> */}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
