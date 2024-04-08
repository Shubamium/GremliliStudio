'use client'
import React, { useEffect, useState } from 'react'
import './artCategoryDisplayer.scss'
import ArtBox from '../displayer/artBox/ArtBox'
import { category } from '@/app/(navigation)/graphics/page'
import Slick from 'react-slick'
import {useAnimate,motion,AnimatePresence} from 'framer-motion'
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
	autoplaySpeed:7500,
	speed:7500,
	pauseOnHover:false,
	pauseOnFocus:false,
	cssEase:'linear'
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
	const pricing = categoryList[activeCategory]?.pricing?.length || 0

	const [scope,animate] = useAnimate();
	// useEffect(()=>{
	// },[])

	const animateList = async () =>{
		await animate('.art-list',{opacity:0,x:-100},{duration:0})
		animate('.art-list',{opacity:1,x:0},{duration:1})
	}
	return (
		<div className='art-category' ref={scope}>
			<section className="category-list">
				{categoryList.map((category,index)=>{
					return <button key={index} className={`btn btn-colored ${colorOrderArray[index % colorOrderArray.length]}`} onClick={()=>{
						setActiveCategory(index)
						animateList()
					}}>{category.title}</button>
				})}
			
			</section>
			<section className='category-detail'>
					<div className="confine">
						<AnimatePresence mode='wait'>
							<motion.div 
								initial={{opacity:0,x:-100}}
								animate={{opacity:1,x:0}}
								exit={{opacity:0,x:100}}
								transition={{duration:0.6}}
							className="detail" key={'detail'+categoryList[activeCategory].title}>
								<h2>{categoryList[activeCategory].title}</h2>
								<p>{categoryList[activeCategory].description}</p>
							</motion.div>
						</AnimatePresence>
						{categoryList[activeCategory].pricing &&  pricing > 0 && <>
							<div className="pricings">
			
							<AnimatePresence>
								{categoryList[activeCategory].pricing && categoryList[activeCategory].pricing?.map((price,index)=>{
									return <motion.div
										initial={{opacity:0,x:-100}}
										animate={{opacity:1,x:0}}
										exit={{opacity:0,x:100}}
										transition={{duration:0.6,delay:0.5+index*0.2}}
									className="price" key={'price'+index}>
									<h3>{price.name}</h3>
									<p>{price.price}</p>
								</motion.div>
								})}
							</AnimatePresence>
						</div>
						</>}
					</div>
			</section>
			<section className='art-list'>
					{renderer[categoryList[activeCategory].renderType](categoryList[activeCategory].imageList)}
			</section>
		</div>
	)
}

//'https://picsum.photos/id/59/350/350'