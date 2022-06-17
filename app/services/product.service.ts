import instance, { axiosClassic } from 'api/interceptors'

import { IProductEditInput } from '@/components/screens/admin/product/product.interface'

import { IProduct } from '@/shared/types/product.types'

import { getProductsUrl } from '@/config/api.config'

export const ProductService = {
	async getMostPopularProducts() {
		const { data: products } = await axiosClassic.get<IProduct[]>(
			getProductsUrl('/most-popular')
		)
		return products
	},

	async getProducts(searchTerm?: string) {
		return axiosClassic.get<IProduct[]>(getProductsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getProductBySlug(slug: string) {
		return axiosClassic.get<IProduct>(getProductsUrl(`/by-slug/${slug}`))
	},

	async getByCategories(typeIds: string[]) {
		return axiosClassic.post<IProduct[]>(getProductsUrl('/by-types'), {
			typeIds,
		})
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.put(getProductsUrl('/update-count-opened'), {
			slug,
		})
	},

	async create() {
		return instance.post<string>(getProductsUrl(``))
	},

	async update(_id: string, data: IProductEditInput) {
		return instance.put<string>(getProductsUrl(`/${_id}`), data)
	},

	async getById(_id: string) {
		return instance.get<IProductEditInput>(getProductsUrl(`/${_id}`))
	},

	async delete(_id: string) {
		return instance.delete<string>(getProductsUrl(`/${_id}`))
	},
}
