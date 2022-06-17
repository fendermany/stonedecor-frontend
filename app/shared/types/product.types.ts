import { ICategory } from './category.types'

export interface IProduct {
	_id: string
	name: string
	description: string
	shortDescription: string
	slug: string
	poster: string
	countOpened: number
	types: ICategory[]
	photos: string[]
}
