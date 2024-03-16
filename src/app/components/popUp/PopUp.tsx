'use client'
import React from 'react'
import './popUp.scss'
type Props = {
	onClose:()=>void;
	isOpen:boolean;
	children:React.ReactNode;
	className?:string;
}

export default function PopUp({
	isOpen,
	onClose,
	children,
	className
}: Props) {
	return (
		<div className={`popup ${className} ${isOpen ? 'open' : 'closed'}`}>
			<div className="overlay" onClickCapture={onClose}></div>
			<div className="content">
			{children}
			</div>
		</div>
	)
}