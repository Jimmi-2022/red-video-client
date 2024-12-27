import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	const pathname = usePathname()
	console.log(pathname === '/')

	return (
		<nav>
			{title && <div className='opacity-40 font-medium uppercase text-xs mb-3'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathname)}
					/>
				))}
			</ul>
		</nav>
	)
}
