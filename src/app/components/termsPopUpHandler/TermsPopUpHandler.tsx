import React from 'react'
import TermsPopUp from '../termsPopUp/TermsPopUp'

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
export default function TermsPopUpHandler({}: Props) {
	return (
		<div className='terms-popup-list'>
			<TermsPopUp type='graphics' termsList={termsListSample}/>
			<TermsPopUp type='adoptables' termsList={termsListSample}/>
			<TermsPopUp type='models' termsList={termsListSample}/>
		</div>
	)
}