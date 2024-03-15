import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa6'
import './pageTitle.scss'
type Props = {
	title:string,
	description:string,
}

export default function PageTitle({
	title,
	description
}: Props) {
	return (
		<div className='page-title shadow'>
			<div className="confine">
					<h2>{title}</h2>
					<p>{description}</p>
					<img src="/decors/decor_palette.png" alt="" className='decor_palette'/>
					<div className="action">
						<button className='btn btn-colored btn-terms'>
							<FaList/> Terms of Service
							<span className='sub-title'>GRAPHICS</span>
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