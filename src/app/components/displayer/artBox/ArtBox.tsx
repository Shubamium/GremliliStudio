import React from 'react'
import './artBox.scss'
import { RiFullscreenFill } from 'react-icons/ri'
import { HiArrowsExpand } from 'react-icons/hi'
import { ImageEventData } from '../../galleryViewPopUp/GalleryViewPopUp'

type Props = {
	image:string
}

export default function ArtBox({
	image
}: Props) {
	return (
		<div className='art-box shadow'>
			<img src={image} alt="" className='main-img' />
			<button className='btn btn-fs' onClick={()=>{
				const event = new CustomEvent<ImageEventData>('modal_gallery', {
					detail:{
						image:image
					},
				})
				document.body.dispatchEvent(event);
			}}><HiArrowsExpand/></button>
			<img src="/decors/splatter-purple.png" alt="" className='decor top' />
			<img src="/decors/splatter-pink.png" alt="" className='decor bottom' />
		</div>
	)
}