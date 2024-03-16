'use client'
import React, { useEffect, useState } from 'react'
import PopUp from '../popUp/PopUp'
import { HiArrowsExpand } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import './galleryViewPopUp.scss'
type Props = {}

export type ImageEventData = {
	image:string
}
export default function GalleryViewPopUp({}: Props) {
	const [isOpen,setIsOpen] = useState(true)
	const [activeImage,setActiveImage] = useState('')
	useEffect(()=>{

		const customFunction =  (e:CustomEvent<ImageEventData>) => {
			setIsOpen(true);
			setActiveImage(e.detail.image);
			console.log(e.detail.image)
		}
		document.body.addEventListener("modal_gallery", customFunction as any)
	},[])

	const onClose = ()=>{
		setIsOpen(false);
		console.log('closed');
	}
	return (
		<PopUp
			isOpen={isOpen}
			onClose={onClose}
			className='gallery_viewer'
		>
			<div className="close-btn">
				<button className='btn btn-colored' onClick={onClose}><CgClose/></button>
			</div>
			<img src={activeImage} alt="" onClick={onClose} className='main-img' />
		</PopUp>
	)
}