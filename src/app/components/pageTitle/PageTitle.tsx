'use client'
import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa6'
import './pageTitle.scss'
import { TermsEventData } from '../termsPopUp/TermsPopUp'
import {motion} from 'framer-motion'
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

	const animation = {
		initial:{
			opacity:0,
			y:100
		},
		animate:{
			opacity:1,
			y:0
		}
	}
	return (
		<div className='page-title shadow'>
			<div className="confine">
					<motion.h2 initial="initial" animate="animate" variants={animation} transition={{duration:0.6,delay:0}}>{title}</motion.h2>
					<motion.p initial="initial" animate="animate" variants={animation} transition={{duration:0.6,delay:0.3}}>{description}</motion.p>
					<img src="/decors/decor_palette.png" alt="" className='decor_palette'/>
					<div className="action">
						<motion.div  initial="initial" animate="animate" variants={animation} transition={{duration:0.6,delay:0.5}} className="btn-container">
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
						</motion.div>
						<motion.div  initial="initial" animate="animate" variants={animation} transition={{duration:0.6,delay:0.7}} className="btn-container">
							<a href='https://vgen.co/Gremlili' target='_blank' className="btn btn-colored green btn-logo">
								<img src="/graphics/vgen-badge.png" alt="" />
								<span>Order on VGEN !</span>
							</a>
						</motion.div>
					</div>
			</div>
		</div>
	)
}