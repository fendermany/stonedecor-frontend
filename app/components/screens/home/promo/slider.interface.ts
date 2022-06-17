import { IProduct } from '@/shared/types/product.types'

export interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

export interface ISlide extends Pick<IProduct, '_id' | 'name'> {
	bigPoster: string
	subTitle: string
	link: string
}
