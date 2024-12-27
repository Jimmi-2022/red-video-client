import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				onClick={toggleSidebar}
				className='opacity-60 hover:opacity-100 transition-opacity'
			>
				<Menu />
			</button>
			<Link
				href={PUBLIC_PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<SquarePlay
					color={COLORS.primary}
					size={29}
				/>
				<span className='font-medium text-xl'>RED Video</span>
			</Link>
		</div>
	)
}
