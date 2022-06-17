import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SubHeading from '@/components/ui/heading/SubHeading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { IProduct } from '@/shared/types/product.types'

import { ProductService } from '@/services/product.service'

import { getProductUrl } from '@/config/url.config'

import styles from '../home/Admin.module.scss'

const PopularProduct: FC = () => {
	const { isLoading, data: products } = useQuery(
		'Popular Products in Admin',
		() => ProductService.getMostPopularProducts()
	)

	return (
		<div className={cn(styles.block, styles.popularProducts)}>
			<ul>
				<table>
					<thead>
						<tr>
							<th>Продукция</th>
							<th className="text-center">Просмотры</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr className="!border-t-8 !border-solid !border-transparent">
								<td colSpan={3} className="!p-0">
									<SkeletonLoader className="h-28 w-max" />
								</td>
							</tr>
						) : (
							products?.map((item) => (
								<tr key={getProductUrl(item.slug)} className="!border-none">
									<td className="grid grid-cols-1 gap-2 items-center pr-5 md:grid-cols-2">
										<Link href={getProductUrl(item.slug)}>
											<a>
												<Image
													className={styles.img}
													width={100}
													height={100}
													src={item.poster}
													alt={item.name}
													layout="fixed"
												/>
											</a>
										</Link>
										<SubHeading title={item.name} />
									</td>
									<td className="text-center">{item.countOpened}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</ul>
		</div>
	)
}

export default PopularProduct
