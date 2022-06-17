import Layout from '@/components/layout/Layout'
import CategoryList from '@/components/screens/admin/categories/CategoryList'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import { NextPageAuth } from '@/shared/types/auth.types'

import Meta from '@/utils/meta/Meta'

const AdminCategories: NextPageAuth = () => {
	return (
		<Layout wrapperName="categories-admin">
			<Meta title="Редактировать категории">
				<div className="admin-panel__container !pt-44">
					<AdminNavigation />
					<Heading className="text-2xl" title="Редактировать категории" />
					<CategoryList />
				</div>
			</Meta>
		</Layout>
	)
}

AdminCategories.isOnlyAdmin = true

export default AdminCategories
