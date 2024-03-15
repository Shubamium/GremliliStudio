import ArtCategoryDisplayer from '@/app/components/artCategoryDisplayer/ArtCategoryDisplayer'
import PageTitle from '@/app/components/pageTitle/PageTitle'
import React from 'react'

type Props = {}
export type category = {
	title:string,
	description:string,
	renderType: 0 | 1 | 2;
	imageList: string[];
	pricing?:{
		name:string,
		price:string,
	}[]
}

const sampleData:category[] = [
	{
		title:'Twitch Assets',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		renderType:0,
		imageList:[
			'https://picsum.photos/id/59/350/350',
			'https://picsum.photos/id/59/350/350',
			'https://picsum.photos/id/59/350/350',
		]
	},
	{
		title:'Logo',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		renderType:0,
		imageList:[
			'https://picsum.photos/id/59/350/350',
			'https://picsum.photos/id/59/350/350',
			'https://picsum.photos/id/59/350/350',
		],
		pricing:[
			{
				name:'Full Render',
				price:'$40/each',
			},
			{
				name:'Full Render',
				price:'$40/each',
			}
		]
	}
]
export default function page({}: Props) {
	return (
		<main id='page_graphics'>
			<PageTitle
					title='Graphics'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
			/>
			<ArtCategoryDisplayer
				categoryList={sampleData}
			/>
		</main>
	)
}