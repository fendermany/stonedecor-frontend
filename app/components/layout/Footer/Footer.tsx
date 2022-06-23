import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { mailYellow, phoneYellow, productsIcon } from '@/assets/img/images'

import { classes } from '@/utils/classes'

import { useCategoriesMenu } from '../../../hooks/useCategoriesMenu'

import Social from './../Social/Social'
import styles from './Footer.module.scss'
import Menu from './Menu/Menu'
import { footerMenu2, footerMenu3 } from './Menu/menu.data'

const Footer: FC = () => {
	const { data } = useCategoriesMenu()

	return (
		<footer className={classes('footer', styles)}>
			<div className="footer__container">
				<div className={classes('footer__logo', styles)}>
					<Link href="/">
						<a>
							<span>Stone</span>
							<span>Decor</span>
						</a>
					</Link>
				</div>
				<div className={classes('footer__body', styles)}>
					<div className="footer__column">
						<span>StoneDecor OÜ</span>
						<span>Reg. nr: 12086917</span>
						<span>
							<Image src={phoneYellow} alt="+37253408960" />
							<Link href="tel:+37253408960">
								<a className="link ml-2 block">+37253408960</a>
							</Link>
						</span>
						<span>
							<Image src={mailYellow} alt="info@stonedecor.eu" />
							<Link href="mailto:info@stonedecor.eu">
								<a className="link ml-2 block">info@stonedecor.eu</a>
							</Link>
						</span>
						<Social />
					</div>
					<Menu
						menu={{
							title: 'Продукция',
							icon: productsIcon,
							items: data || [],
						}}
					/>
					<Menu menu={footerMenu2} />
					<Menu menu={footerMenu3} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
