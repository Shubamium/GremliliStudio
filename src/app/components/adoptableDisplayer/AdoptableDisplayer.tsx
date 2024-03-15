import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './adoptableDisplayer.scss'
type Props = {}


export default function AdoptableDisplayer({}: Props) {
	return (
		<div className='adoptable'>
			<figure>
				<img src="/graphics/adoptable_main.png" alt="" className='main-img' />
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splatter' />
			</figure>
			<article>
				<div className="data-top">
					<div className="status adopt">
						<h2>ADOPTED</h2>
					</div>
					<div className="name">
						<h2>Choco-mint Bunny </h2>
					</div>
					<div className="includes">
						<div className="include">
							<h2 >3 Expressions </h2>
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
						<div className="include">
							<p>Pre-Order</p>
						</div>
					</div>
				</div>
				<div className="data-bottom">
					<button className='btn btn-preview'>
						Preview <FaArrowRight/>
					</button>
				</div>
			</article>

			<div className="price">
				<p>$400 <span className='unit'>USD</span></p>
			</div>
		</div>
	)
}