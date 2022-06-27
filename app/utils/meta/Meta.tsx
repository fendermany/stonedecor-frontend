import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { FC } from 'react'

import logoImage from '@/assets/img/logo.svg'

import { siteName, titleMerge } from '@/config/seo.config'

import { onlyText } from '../string/clearText'

import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			<Head>
				<Script>
					{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(45352812, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
        `}
				</Script>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="ru" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta
							property="og:image"
							content={currentUrl + logoImage.src.slice(1)}
						/>
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
						<meta name="yandex-verification" content="2b4a34e9ddbed98d" />
						{/* <script
							data-ad-client="ca-pub-5296894635996235"
							async
							src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
						></script> */}
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}
export default Meta
