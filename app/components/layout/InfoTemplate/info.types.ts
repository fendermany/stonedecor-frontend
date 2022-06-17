import { ISlide } from '@/components/screens/home/promo/slider.interface'

export interface IInfoTemplate {
	slides: ISlide[]
	title: string
	description: string
	content: React.ReactElement
}

export interface IInfoProps {
	slides: ISlide[]
}
