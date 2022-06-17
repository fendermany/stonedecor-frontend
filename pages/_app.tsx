import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import 'swiper/scss/effect-fade'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '@/assets/styles/globals.scss'
import '@/assets/styles/react-select.scss'
import '@/assets/styles/slide-animation.scss'

import MainProvider from './../app/providers/MainProvider'

import 'swiper/scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default appWithTranslation(MyApp)
