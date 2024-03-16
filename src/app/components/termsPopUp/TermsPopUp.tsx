'use client'
import React, { useEffect, useState } from 'react'
import PopUp from '../popUp/PopUp'
import './termsPopUp.scss'
import { PiCross } from 'react-icons/pi'
import { ImCross } from 'react-icons/im'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'

type Props = {
	type:string,
	termsList:{
		title:string,
		description:string,
	}[]
}


const chunkIntoN = (arr:any[], n:number) => {
	const chunks = [];
	let i = 0;
	while (i < arr.length) {
		chunks.push(arr.slice(i, i += n));
	}
	return chunks;
} 

export type TermsEventData = {
	type:string

}
export default function TermsPopUp({
	type,
	termsList
}: Props) {
	const [isOpen,setIsOpen] = useState(false)
	const [page,setPage] = useState(0)
	useEffect(()=>{

		const customFunction =  (e:CustomEvent<TermsEventData>) => {
			if(e.detail.type === type){
				setIsOpen(true)
			}
			console.log(e.detail.type, type)
		}
		document.body.addEventListener("modal_terms", customFunction as any)
	},[type])
	const onClose = ()=>{
		setIsOpen(false)
		setPage(0)
	}


	const splittedTerms = chunkIntoN(termsList,3);
	const toRender = splittedTerms[page]

	const next = ()=>{
		setPage((page)=>{
			return Math.min(page+1,splittedTerms.length-1)
		})
	}
	const prev = ()=>{
		setPage((page)=>{
			return Math.max(page-1,0)
		})
	}
	return (
		<PopUp 
			isOpen={isOpen}
			onClose={onClose}
			className='terms-popup'>
				<div className="sub-text">
					<p><strong>Terms of Service vary per page</strong>, Always check for specifics!</p>
				</div>
				<div className="terms-panel">
						<div className="panel-head">
								<div className="top">
									<div className="left">
									<h2>Terms Of Service</h2>
									<p className='type'>{type}</p>
									<img src="/decors/splat-list-v.png" alt="" className='decor_splatter' />
								</div>
								<div className="right">
									<button className='btn btn-exit' onClick={onClose}><ImCross/></button>
								</div>
								</div>
								<p className='desc'>By commissioning me, you agree that you have read and understood my T.O.S.</p>
						</div>
						<div className="terms-list">
				
							{toRender.map((term,index)=>{
								return 	<div className="terms" key={'terms-list'+ term.title + index}>
								<h2>{term.title}</h2>
								<p>{term.description}</p>
							</div>
							})}
						</div>
						<div className="action">
							<button onClick={prev} className='btn btn-move'><VscTriangleLeft/></button>
							<p className='pagination'> {page + 1} / {splittedTerms.length}</p>
							<button onClick={next} className='btn btn-move'><VscTriangleRight/></button>
						</div>
				</div>
		</PopUp>
	)
}