import AdoptableList, { Adoptable } from '@/app/components/adoptableList/AdoptableList'
import PageTitle from '@/app/components/pageTitle/PageTitle'
import { GeneralData } from '@/app/page'
import { fetchData } from '@/db/db'
import React from 'react'

type Props = {}

type AdoptablesData = Adoptable[]
export default async function page({}: Props) {
	const generalData = await fetchData<GeneralData[]>(`
		*[_type == 'general' && preset == 'main'] {
			preset,
			section_desc
		}
	`)
	const mainData = generalData[0];
	
	const adoptables = await fetchData<AdoptablesData>(
		`
		*[_type == 'adoptables'] {
			name,
			isAdopted,
			image,
			includes[] {
				title,
				description
			},
			price
		}
		`
	)
	return (
		<main id='page_adoptables'>
			<PageTitle
				title='Adoptables'
				type='adoptables'
				description={mainData.section_desc.adoptable_desc}
			/>
			<AdoptableList
				adoptables={adoptables}
			/>
		</main>
	)
}