import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import {
	backgroundStones,
	breadcrumbs,
	checkbox,
	li,
	mail,
	mailYellow,
	phone,
	phoneYellow,
	popupIcon,
	promo,
	rusLang,
	sliderNext,
	sliderPrev,
	title,
} from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from './Header.module.scss'
import Menu from './Menu/Menu'
import { HeaderMenu } from './Menu/menu.data'

const Header: FC = () => {
	return (
		<header className={classes('header', styles)}>
			<div className={classes('header__top', styles)}>
				<div className="header__container">
					<div className={classes('header__top-wrapper', styles)}>
						<div className={classes('header__top-left', styles)}>
							<div className={classes('header__top-name', styles)}>
								StoneDecor OÜ
							</div>
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
							<select name="form[]" className={classes('form', styles)}>
								<option data-asset="img/rus.svg" defaultValue="1">
									RU
								</option>
								<option data-asset="img/rus.svg" defaultValue="2">
									EE
								</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
