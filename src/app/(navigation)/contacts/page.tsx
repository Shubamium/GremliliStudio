import React from 'react'
import './contacts.scss'
import { HiPaperAirplane } from 'react-icons/hi'
import { IoMail } from 'react-icons/io5'
import { FaMessage } from 'react-icons/fa6'
import { BiMessageDetail } from 'react-icons/bi'
import { CgArrowLongRight } from 'react-icons/cg'
type Props = {}

export default function Contacts({}: Props) {
	return (
		<main id='page_contacts'>
			<section className='send-message'>
				<div className="confine">
					<article className='text-part'>
							<img src="/decors/palette-list.png" alt="" className="decor_palette" />
							<h2> Send a Message</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
							<p>(For Quote or business proposals/sponsorships)</p>
							<div className="email">
								<a href="mailto:cryckat@gmail.com"><IoMail/> cryckat@gmail</a>
							</div>
					</article>
					<form action="#" className='form-part'>
						<div className="field-group">
							<div className="field">
								<label htmlFor="#">Identification <span className='detail'>(required)</span></label>
								<input type="text"  placeholder='Enter your name/alias and pronouns'/>
							</div>
							<div className="field">
								<label htmlFor="#">Email <span className='detail'>(required)</span></label>
								<input type="email"  placeholder='Enter your email'/>
							</div>
						</div>
							<div className="field">
								<label htmlFor="#">Social Media</label>
								<input type="text"  placeholder='Enter your most used social media'/>
							</div>
							<div className="field">
								<label htmlFor="#">Subject</label>
								<input type="text"  placeholder='The subject of your inquiry'/>
							</div>
							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea name="message" placeholder='Enter your message here. . .' id="message-field"></textarea>
							</div>

							<div className="action">
								<button className='btn btn-colored gold btn-send'>
									SEND <HiPaperAirplane/>
								</button>
							</div>
					</form>
				</div>
			</section>

			<section className='reach-out'>
				<div className="confine">
						<div className="text">
							<h2>Get in touch directly!</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
						</div>
						<div className="action">
							<button className="btn btn-colored">
							 Discord <CgArrowLongRight/> Gremlili#9706
							</button>
							<a href='https://twitter.com/GremliliStudio' target='_blank' className="btn btn-colored gold">
								Message me on Twitter
								<BiMessageDetail/>
							</a>
						</div>
				</div>
			</section>
		</main>
	)
}