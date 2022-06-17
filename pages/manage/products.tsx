import Layout from '@/components/layout/Layout'
import ProductsList from '@/components/screens/admin/products/ProductList'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import { NextPageAuth } from '@/shared/types/auth.types'

import Meta from '@/utils/meta/Meta'

const AdminProducts: NextPageAuth = () => {
	return (
		<Layout wrapperName="products-admin">
			<Meta title="Редактировать продукцию">
				<div className="admin-panel__container !pt-44">
					<AdminNavigation />
					<Heading className="text-2xl" title="Редактировать продукцию" />
					<ProductsList />
				</div>
			</Meta>
		</Layout>
	)
}

AdminProducts.isOnlyAdmin = true

export default AdminProducts
