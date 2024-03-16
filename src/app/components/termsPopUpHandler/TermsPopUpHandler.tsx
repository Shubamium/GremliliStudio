import React from 'react'
import TermsPopUp from '../termsPopUp/TermsPopUp'
import { fetchData } from '@/db/db'

type Props = {}

const termsListSample = [
	{
		title:'Title',
		description:'All of my Vtuber Models include Commercial rights. Meaning you can use your model wherever and however you please, as well as feature it for profit (Merch, etc.)',
	},
	{
		title:'Title',
		description:'All of my Vtuber Models include Commercial rights. Meaning you can use your model wherever and however you please, as well as feature it for profit (Merch, etc.)',
	},
	{
		title:'Title',
		description:'All of my Vtuber Models include Commercial rights. Meaning you can use your model wherever and however you please, as well as feature it for profit (Merch, etc.)',
	}
	,
	{
		title:'Title',
		description:'All of my Vtuber Models include Commercial rights. Meaning you can use your model wherever and however you please, as well as feature it for profit (Merch, etc.)',
	}
	,
	{
		title:'Title',
		description:'All of my Vtuber Models include Commercial rights. Meaning you can use your model wherever and however you please, as well as feature it for profit (Merch, etc.)',
	}
]

type TermsData = {
	section:string
	terms:{
		title:string,
		description:string,
	}[]
}
export default async function TermsPopUpHandler({}: Props) {
	const termsList = await fetchData<TermsData[]>(
		`
		*[_type == 'terms'] {
			section,
			terms
		}
		`
	)
	
	return (
		<div className='terms-popup-list'>
			{termsList.map((sectionData,index)=>(
				<TermsPopUp type={sectionData.section} termsList={sectionData.terms} key={'terms-popup'+sectionData.section+index}/>
			))}
		</div>
	)
}