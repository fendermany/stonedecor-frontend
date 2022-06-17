import { Menu, MenuItem } from '@mui/material'
import Fade from '@mui/material/Fade'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { classes } from '@/utils/classes'

import styles from '../Header.module.scss'

import { IMenuItem } from './../../Header/Menu/menu.interface'

const MenuItemComponent: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<li
			className={cn({
				['link']: true,
				[classes('menu__item', styles)]: true,
				[styles.active]: asPath.includes(item.link),
			})}
		>
			{item.submenu ? (
				<div
					className={classes('menu__link', styles)}
					id="fade-button"
					aria-controls={open ? 'fade-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					onMouseOver={handleClick}
				>
					{item.title}
				</div>
			) : (
				<Link href={item.link}>
					<a className={classes('menu__link', styles)}>{item.title}</a>
				</Link>
			)}
			<Menu
				id="fade-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
				MenuListProps={{
					'aria-labelledby': 'fade-button',
					onMouseLeave: handleClose,
				}}
				sx={{
					'& .MuiPaper-root': {
						bgcolor: '#1e1d1c',
						color: '#fff',
					},
				}}
			>
				{item.submenu &&
					item.submenu.map((subitem: any, idx: number) => (
						<MenuItem key={`subitem ${idx}`}>
							<Link href={subitem.link}>
								<a className={cn('link', classes('menu__link-sub', styles))}>
									{subitem.title}
								</a>
							</Link>
						</MenuItem>
					))}
			</Menu>
		</li>
	)
}
export default MenuItemComponent
