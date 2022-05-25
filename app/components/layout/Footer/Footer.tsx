import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import {
	facebook,
	mailYellow,
	phoneYellow,
	viber,
	whatssapp,
} from '@/assets/img/images'

import { classes } from '@/utils/classes'

import styles from './Footer.module.scss'
import Menu from './Menu/Menu'
import { footerMenu1, footerMenu2, footerMenu3 } from './Menu/menu.data'

const Footer: FC = () => {
	return (
		<footer className={classes('footer', styles)}>
			<div className="footer__container">
				<div className={classes('footer__logo', styles)}>
					<a href="/">
						{' '}
						<span>Stone</span>
						<span>Decor</span>{' '}
					</a>
				</div>
				<div className={classes('footer__body', styles)}>
					<div className={classes('footer__column', styles)}>
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
						<ul className="social">
							<li>
								<Link href="#">
									<a>
										<Image src={facebook} alt="facebook" />
									</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>
										<Image src={whatssapp} alt="whatsapp" />
									</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>
										<Image src={viber} alt="viber" />
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<Menu menu={footerMenu1} />
					<Menu menu={footerMenu2} />
					<Menu menu={footerMenu3} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
