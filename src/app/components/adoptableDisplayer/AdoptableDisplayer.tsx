'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './adoptableDisplayer.scss'
import { ImageEventData } from '../galleryViewPopUp/GalleryViewPopUp'
import { Adoptable } from '../adoptableList/AdoptableList'

type Props = Adoptable


export default function AdoptableDisplayer({
	image,
	includes,
	isAdopted,
	name,
	price
}: Props) {
	return (
		<div className='adoptable'>
			<figure>
				<img src={image} alt="" className='main-img' />
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splatter' />
			</figure>
			<article>
				<div className="data-top">
					<div className={`status ${isAdopted ? 'adopt' : 'available'}`}>
						<h2>{isAdopted ? 'ADOPTED' : 'AVAILABLE'}</h2>
					</div>
					<div className="name">
						<h2>{name} </h2>
					</div>
					<div className="includes">
						{includes?.map((include,index)=>{
							return (
								<div className="include" key={name+'include-title'+index}>
									{include.title && <h2>{include.title}</h2>}
									<p>{include.description}</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className="data-bottom">
					<button onClick={()=>{
							const event = new CustomEvent<ImageEventData>('modal_gallery', {
								detail:{
									image:image
								},
							})
							document.body.dispatchEvent(event);
					}} className='btn btn-preview'>
						Preview <FaArrowRight/>
					</button>
				</div>
			</article>

			<div className="price">
				<p>{price} <span className='unit'>USD</span></p>
			</div>
		</div>
	)
}