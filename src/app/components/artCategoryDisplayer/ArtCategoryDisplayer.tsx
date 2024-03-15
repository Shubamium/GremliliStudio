'use client'
import React, { useState } from 'react'
import './artCategoryDisplayer.scss'
import ArtBox from '../displayer/artBox/ArtBox'
import { category } from '@/app/(navigation)/graphics/page'
type Props = {
	categoryList:category[]
}


const renderer = [
	(imageList:string[])=>{
		return <div className="boxes">
			{
				imageList.map((image,index)=>{
					return <ArtBox image={image} key={index}/>
				})
			}
		</div>
	},
	(imageList:string[])=>{
		return imageList.map((image,index)=>{
			return <ArtBox image={image} key={index}/>
		})
	},
	(imageList:string[])=>{
		return imageList.map((image,index)=>{
			return <ArtBox image={image} key={index}/>
		})
	},
]


const colorOrderArray = ['','pink','purple','green','gold']
export default function ArtCategoryDisplayer({
	categoryList
}: Props) {

	const [activeCategory,setActiveCategory] = useState(0)
	
	return (
		<div className='art-category'>
			<section className="category-list">
				{categoryList.map((category,index)=>{
					return <button key={index} className={`btn btn-colored ${colorOrderArray[index % colorOrderArray.length]}`} onClick={()=>{
						setActiveCategory(index)
					}}>{category.title}</button>
				})}
			
			</section>
			<section className='category-detail'>
					<div className="confine">
						<h2>{categoryList[activeCategory].title}</h2>
						<p>{categoryList[activeCategory].description}</p>
						<div className="pricings">
			
							{categoryList[activeCategory].pricing && categoryList[activeCategory].pricing?.map((price,index)=>{
								return <div className="price" key={'price'+index}>
								<h3>{price.name}</h3>
								<p>{price.price}</p>
							</div>
							})}
						</div>
					</div>
			</section>
			<section className='art-list'>
					{renderer[categoryList[activeCategory].renderType](categoryList[activeCategory].imageList)}
			</section>
		</div>
	)
}

//'https://picsum.photos/id/59/350/350'