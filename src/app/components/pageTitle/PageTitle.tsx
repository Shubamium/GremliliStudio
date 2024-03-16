'use client'
import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa6'
import './pageTitle.scss'
import { TermsEventData } from '../termsPopUp/TermsPopUp'
type Props = {
	title:string,
	description:string,
	type:string,
}

export default function PageTitle({
	title,
	description,
	type
}: Props) {
	return (
		<div className='page-title shadow'>
			<div className="confine">
					<h2>{title}</h2>
					<p>{description}</p>
					<img src="/decors/decor_palette.png" alt="" className='decor_palette'/>
					<div className="action">
						<button onClick={()=>{
							const event = new CustomEvent<TermsEventData>('modal_terms', {
								detail:{
									type:type
								},
							})
							document.body.dispatchEvent(event);
						}} className='btn btn-colored btn-terms'>
							<FaList/> Terms of Service
							<span className='sub-title'>{title}</span>
						</button>
						<a href='https://vgen.co/Gremlili' target='_blank' className="btn btn-colored green btn-logo">
								<img src="/graphics/vgen-badge.png" alt="" />
								<span>Order on VGEN !</span>
							</a>
					</div>
			</div>
		</div>
	)
}