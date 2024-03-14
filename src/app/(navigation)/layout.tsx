import React, { ReactNode } from 'react'
import Navigation from '../components/navigation/Navigation'

type Props = {
	children:ReactNode
}

export default function NavLayout({
	children
}: Props) {
	return (
		<div className="nav-layout">
			<Navigation/>
			{children}
		</div>
	)
}