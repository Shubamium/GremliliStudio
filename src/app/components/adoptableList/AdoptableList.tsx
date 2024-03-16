'use client'
import React from 'react'
import './adoptableList.scss'
import AdoptableDisplayer from '../adoptableDisplayer/AdoptableDisplayer'
type Props = {}
import Slider from 'react-slick'



export default function AdoptableList({}: Props) {
	const settings:any = {
		dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
	}
	return (
		<section className='adoptable-list'>
			<div className="action">
					<button className='btn btn-colored green'>AVAILABLE</button>
					<button className='btn btn-colored gold'>ADOPTED</button>
			</div>
			<Slider className="lists" {...settings}>
				<AdoptableDisplayer 
					image={'/graphics/adoptable_main.png'}
				/>
				<AdoptableDisplayer 
					image={'/graphics/adoptable_main.png'}
				/>
			</Slider>
		</section>
	)
}