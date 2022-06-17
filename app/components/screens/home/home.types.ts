import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { ICategoryItem } from './categories/category.interface'

export interface IHome {
	slides: ISlide[]
	categories: ICategoryItem[]
	examples: ICategoryItem[]
	locale?: string
}
