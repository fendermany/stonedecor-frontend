export interface IMenuItem {
	title: string
	link: string
}

export interface IMenu {
	icon: any
	title: string
	items: IMenuItem[]
}
