import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IProduct } from '@/shared/types/product.types'

import { classes } from '@/utils/classes'

import { getProductUrl } from '@/config/url.config'

import styles from './Catalog.module.scss'

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
	const { push } = useRouter()

	return (
		<li className={classes('category__list-item', styles)}>
			<div className={classes('category__list-img', styles)}>
				<Image src={product.poster} alt={product.name} layout="fill" />
				<SubHeading title={product.name} />
			</div>
			<Description
				text={product.shortDescription}
				className={classes('category__list-descr', styles)}
			/>
			<button
				onClick={() => push(getProductUrl(product.slug))}
				type="button"
				className={cn({
					[classes('category__list-btn', styles)]: true,
					['button']: true,
				})}
			>
				Подробнее
			</button>
		</li>
	)
}

export default CatalogItem
