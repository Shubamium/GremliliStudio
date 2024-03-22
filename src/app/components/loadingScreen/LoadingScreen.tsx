'use client'
import React, { useEffect, useState } from 'react'
import './loadingScreen.scss'
type Props = {}

export default function LoadingScreen({}: Props) {
	const [isLoaded,setIsLoaded] = useState(false); 
	useEffect(()=>{
		document.body.style.overflow = 'hidden'

		const interv = setTimeout(()=>{
			setIsLoaded(true);
			document.body.style.overflow = 'auto'
		},4000)
		return ()=>{
			document.body.style.overflow = 'auto'
			clearTimeout(interv)
		}
	},[])
	return (
		<div id="loading-screen" className={`${isLoaded ? 'loaded' : ''}`}>
				<img src="/decors/loading-splat.png" alt="" className='decor splat-top' />
				<img src="/decors/loading-splat.png" alt="" className='decor splat-bottom' />
				<div className="decor edge-top"></div>
				<div className="decor edge-bottom"></div>

				<img src="/graphics/logo_white.png" alt="" className='main-logo' />
				<p className='text'>Loading the website . . .</p>
		</div>
	)
}