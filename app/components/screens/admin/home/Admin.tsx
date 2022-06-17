import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import Statistics from '../statistics/Statistics'

const Admin: FC = () => {
	return (
		<Layout wrapperName="admin-panel">
			<Meta title="Admin panel">
				<div className="admin-panel__container !pt-44">
					<AdminNavigation />
					<Heading title="Разная статистика" className="text-2xl" />
					<Statistics />
				</div>
			</Meta>
		</Layout>
	)
}

export default Admin
