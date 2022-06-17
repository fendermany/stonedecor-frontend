import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import Meta from '@/utils/meta/Meta'

import styles from '../home/Admin.module.scss'

import PopularProduct from './PopularProducts'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<PopularProduct />
		</div>
	)
}

export default Statistics
