import { SidebarHeader } from './header/SidbarHeader'
import { SidebarMenu } from './header/menus/SidebarMenu'
import { SidebarSubscriptions } from './header/menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

export function Sidebar() {
	return (
		<aside>
			<SidebarHeader />
			<SidebarMenu menu={SIDEBAR_DATA} />

			<SidebarSubscriptions />

			<SidebarMenu menu={MORE_SIDEBAR_DATA} />
		</aside>
	)
}
