import React from 'react'
import './navigation.scss'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'
import { SiTaichigraphics } from 'react-icons/si'
import { BsPersonFillAdd } from 'react-icons/bs'
import { PiMaskHappyFill } from 'react-icons/pi'

type Props = {}

export default function Navigation({}: Props) {
	return (
		<header id="navigation">
				<h1 style={{display:'none'}}>Gremlili Studio</h1>
				<div className="confine">
				<div className="logo-container">
					<img src="/decors/nav-circle.png" alt="" className='decor_circle' />
					<img src="/graphics/logo.png" alt="" className='main-logo' />
				</div>
				<nav>
						<Link href={'/'} className='btn-awning'>
							<span className='icon'>
								<FaHome/>
							</span>
							<span className='name'>
								HOME
							</span>
						</Link>
						<Link href={'/contact'} className='btn-awning'>
							<span className='icon'>
								<GrContact/>
							</span>
							<span className='name'>
								CONTACT
							</span>
						</Link>
						<Link href={'/graphics'} className='btn-awning'>
							<span className='icon'>
								<SiTaichigraphics/>
							</span>
							<span className='name'>
								GRAPHICS
							</span>
						</Link>
						<Link href={'/adoptables'} className='btn-awning'>
							<span className='icon'>
								<BsPersonFillAdd/>
							</span>
							<span className='name'>
								ADOPTABLES
							</span>
						</Link>
						<Link href={'/models'} className='btn-awning'>
							<span className='icon'>
								<PiMaskHappyFill/>
							</span>
							<span className='name'>
								MODELS
							</span>
						</Link>
				</nav>
				</div>
		</header>
	)
}