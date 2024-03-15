import AdoptableList from '@/app/components/adoptableList/AdoptableList'
import PageTitle from '@/app/components/pageTitle/PageTitle'
import React from 'react'

type Props = {}

export default function page({}: Props) {
	return (
		<main id='page_adoptables'>
			<PageTitle
				title='Adoptables'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
			/>
			<AdoptableList/>
		</main>
	)
}