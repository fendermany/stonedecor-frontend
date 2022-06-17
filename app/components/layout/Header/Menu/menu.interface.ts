export interface IMenuItem {
	title: string
	link: string
	submenu?: any
}

export interface IMenu {
	items: IMenuItem[]
}
