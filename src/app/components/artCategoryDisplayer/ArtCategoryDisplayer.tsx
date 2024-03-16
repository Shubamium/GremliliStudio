'use client'
import React, { useState } from 'react'
import './artCategoryDisplayer.scss'
import ArtBox from '../displayer/artBox/ArtBox'
import { category } from '@/app/(navigation)/graphics/page'
import Slick from 'react-slick'
import { ImageEventData } from '../galleryViewPopUp/GalleryViewPopUp'
type Props = {
	categoryList:category[]
}

const settings = {
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay:true,
	autoplaySpeed:3000,
	speed:3000,
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
		return <Slick  {...settings}   pauseOnFocus={false} easing='linear' className="lists">
			{imageList.map((image,index)=>{
				return <div className="list"  key={'image-list'+index}>
					<img src={image} alt="" onClickCapture={()=>{
					const event = new CustomEvent<ImageEventData>('modal_gallery', {
						detail:{
							image:image
						},
					})
					document.body.dispatchEvent(event);
				}} />
				</div>
			})}
			{
				imageList.length < 2 && <div className="list"></div>
			}{
				imageList.length < 3 && <div className="list"></div>
			}
		</Slick>
	},
	(imageList:string[])=>{
		return <div className="boxes">
		{
			imageList.map((image,index)=>{
				return <ArtBox isPortrait={true} image={image} key={index}/>
			})
		}
	</div>
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