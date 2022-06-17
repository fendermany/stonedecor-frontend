import cn from 'classnames'
import { FC, ReactNode } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

type Props = {
	children?: ReactNode
	wrapperName?: string
}

const Layout: FC<Props> = ({ children, wrapperName }) => {
	return (
		<div className={cn(`${wrapperName}`, styles.wrapper)}>
			<Header />
			<main className="page">{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
