'use client'
import { PricingData } from '@/app/(navigation)/models/page'
import { urlFor } from '@/db/db'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosCheckmark } from 'react-icons/io'

type Props = PricingData

export default function PricePanel({
	addons,
	price,
	title,
	includes,
	extra
}: Props) {
	return (
		<div className="price-panel">
					<div className="price">
						<p>{price} <span className='unit'>USD</span></p>
					</div>
					<h2 className='title'>{title}</h2>
					<div className="includes">
						{includes?.map((include,index)=>{
							return 	<div className="include" key={'include-list'+title+index}>
								<div className="icon"><IoIosCheckmark/></div>
								<div className="text">
									<p>{include}</p>
								</div>
							</div>
						})}
						{/* <div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div> */}
					</div>
					<div className="extras">
						{extra && <button onClick={()=>{
							const modalEvent = new CustomEvent('modal_gallery',{
								detail:{
									image:urlFor(extra.image).url()
								}
							})
							document.body.dispatchEvent(modalEvent)
						}} className='btn btn-expression'>{extra.button} <FaArrowRight/></button>}
						<div className="extra-price-list">
							{addons?.map((addon,index)=>{
								return 		<div className="extra-price" key={'addon-list'+title+'-'+index}>
								<h2>{addon.price}</h2>
								<p>{addon.title}</p>
							</div>
							})}
							{/* <div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div> */}
						</div>
					</div>
				</div>
	)
}