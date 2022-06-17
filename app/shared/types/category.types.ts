import { IProduct } from './product.types'

export interface ICategory {
	_id: string
	name: string
	description: string
	shortDescr: string
	galleryDescr: string
	slug: string
	image: string
	countProducts: number
	photos: string[]
}
