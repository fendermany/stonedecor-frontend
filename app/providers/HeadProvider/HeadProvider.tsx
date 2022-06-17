import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

import { accentColor } from '@/config/constants'

import FavIcons from './FavIcons'

export interface Props {
	children?: ReactNode
}

const HeadProvider: FC<Props> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5.0"
				/>

				<FavIcons />

				<meta name="theme-color" content={'#1e1d1c'} />
				<meta name="msapplication-navbutton-color" content={'#1e1d1c'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#1e1d1c'}
				/>
			</Head>
			{children}
		</>
	)
}
export default HeadProvider
