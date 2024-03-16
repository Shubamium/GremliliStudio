'use client'
import React, { useState } from 'react'
import './adoptableList.scss'
import AdoptableDisplayer from '../adoptableDisplayer/AdoptableDisplayer'
import Slider from 'react-slick'
import { urlFor } from '@/db/db'


export type Adoptable = {
	name:string
	isAdopted:boolean,
	image:any,
	includes:{
		title:string
		description:string
	}[]
	price:string
}

type Props = {
	adoptables:Adoptable[]
}

export default function AdoptableList({
	adoptables
}: Props) {
	const settings:any = {
		dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
	}

	const [visibleType,setVisibleType] = useState('available');

	const toRender = visibleType === 'adopted' ? adoptables.filter((adopt)=> adopt.isAdopted === true) : adoptables.filter((adopt)=> adopt.isAdopted !== true)
	return (
		<section className='adoptable-list'>
			<div className="action">
					<button onClick={()=>{
						setVisibleType('available')
					}} className={`btn btn-colored ${visibleType === 'available' ? 'selected' : ''}  green`}>AVAILABLE</button>
					<button onClick={()=>{
						setVisibleType('adopted')
					}}  className={`btn btn-colored ${visibleType === 'adopted' ? 'selected' : ''} gold`}>ADOPTED</button>
			</div>
				
			<Slider className="lists" {...settings}>
						{toRender.map((adopt,index)=>{
							return <AdoptableDisplayer 
							{...adopt}
							key={'adoptable-displayer'+index}
							image={urlFor(adopt.image).url()}
							/>
						})}
					{toRender.length < 2 && (<div className="pad"></div>)}
					{toRender.length < 3 && (<div className="pad"></div>)}
			</Slider>
		</section>
	)
}