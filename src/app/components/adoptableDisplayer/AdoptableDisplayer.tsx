'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './adoptableDisplayer.scss'
import { ImageEventData } from '../galleryViewPopUp/GalleryViewPopUp'

type Props = {
	image:string
}


export default function AdoptableDisplayer({
	image
}: Props) {
	return (
		<div className='adoptable'>
			<figure>
				<img src={image} alt="" className='main-img' />
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splatter' />
			</figure>
			<article>
				<div className="data-top">
					<div className="status adopt">
						<h2>ADOPTED</h2>
					</div>
					<div className="name">
						<h2>Choco-mint Bunny </h2>
					</div>
					<div className="includes">
						<div className="include">
							<h2 >3 Expressions </h2>
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
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
				<p>$400 <span className='unit'>USD</span></p>
			</div>
		</div>
	)
}