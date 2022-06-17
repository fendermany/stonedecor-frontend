export interface ITableItem {
	_id: string
	editUrl: string
	items: any[]
}

export interface IAdminTableItem {
	tableItem: ITableItem
	removeHandler: (id: string) => void
}
