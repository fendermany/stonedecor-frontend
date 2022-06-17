import { IProduct } from '@/shared/types/product.types'

export interface IProductEditInput
	extends Omit<IProduct, 'rating' | 'countOpened' | 'types'> {
	types: string[]
}
