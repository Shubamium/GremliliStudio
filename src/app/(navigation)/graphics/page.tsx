import ArtCategoryDisplayer from '@/app/components/artCategoryDisplayer/ArtCategoryDisplayer'
import PageTitle from '@/app/components/pageTitle/PageTitle'
import { GeneralData } from '@/app/page'
import { fetchData, urlFor } from '@/db/db'
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
		renderType:2,
		imageList:[
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
		]
	},
	{
		title:'Logo',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		renderType:0,
		imageList:[
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
			'https://picsum.photos/id/59/350/680',
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

export type CategoryData = {
  data:{
		category: string;
		desc: string;
		imageList: any[],
		pricing: {
			name: string;
			price: string;
		}[];
		display: number;
	}
}

export function categoryDataToCategoryList(categoryList:CategoryData[]):category[]{
	return categoryList.map((category)=>{
		return {
			title:category.data.category,
			description:category.data.desc,
			renderType:category.data.display as 0 | 1 | 2,
			imageList:category.data.imageList.map((image:any)=>urlFor(image).url()),
			pricing:category.data.pricing
		}
	})	
}
export default async function page({}: Props) {
	const generalData = await fetchData<GeneralData[]>(`
		*[_type == 'general' && preset == 'main'] {
			preset,
			section_desc
		}
	`)
	const mainData = generalData[0];
	const graphicsData = await fetchData<CategoryData[]>(`
		*[_type == 'graphics'] {
			data{
					category,
					desc,
					imageList,
					pricing,
					display
			}
		}
	`)
	// const graphicsData = graphicsData[0];
	return (
		<main id='page_graphics'>
			<PageTitle
					title='Graphics'
					type='graphics'
					description={mainData.section_desc.graphics_desc}
			/>
			<ArtCategoryDisplayer
				categoryList={categoryDataToCategoryList(graphicsData)}
			/>
		</main>
	)
}