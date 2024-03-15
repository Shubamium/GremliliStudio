import React from 'react'
import './artBox.scss'
import { RiFullscreenFill } from 'react-icons/ri'

type Props = {
	image:string
}

export default function ArtBox({
	image
}: Props) {
	return (
		<div className='art-box shadow'>
			<img src={image} alt="" className='main-img' />
			<button className='btn btn-fs'><RiFullscreenFill/></button>
			<img src="/decors/splatter-purple.png" alt="" className='decor top' />
			<img src="/decors/splatter-pink.png" alt="" className='decor bottom' />
		</div>
	)
}