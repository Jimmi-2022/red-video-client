import type { PropsWithChildren } from 'react'

import { Content } from '@/components/layout/content/Content'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	)
}
