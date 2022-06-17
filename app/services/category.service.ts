import instance, { axiosClassic } from 'api/interceptors'

import { ICategoryEditInput } from '@/components/screens/admin/category/category-edit.interface'

import { ICategory } from '@/shared/types/category.types'

import { getCategoriesUrl } from '@/config/api.config'

export const CategoryService = {
	async getCategories(searchTerm?: string) {
		return axiosClassic.get<ICategory[]>(getCategoriesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<ICategory>(getCategoriesUrl(`/by-slug/${slug}`))
	},

	async create() {
		return instance.post<string>(getCategoriesUrl(``))
	},

	async update(_id: string, data: ICategoryEditInput) {
		return instance.put<string>(getCategoriesUrl(`/${_id}`), data)
	},

	async getById(_id: string) {
		return instance.get<ICategoryEditInput>(getCategoriesUrl(`/${_id}`))
	},

	async delete(_id: string) {
		return instance.delete<string>(getCategoriesUrl(`/${_id}`))
	},
}
