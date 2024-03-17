import React from 'react'
import './contacts.scss'
import { HiPaperAirplane } from 'react-icons/hi'
import { IoMail } from 'react-icons/io5'
import { BiMessageDetail } from 'react-icons/bi'
import { CgArrowLongRight } from 'react-icons/cg'
import { GeneralData } from '@/app/page'
import { fetchData } from '@/db/db'
type Props = {}

export default async function Contacts({}: Props) {
	const generalData = await fetchData<GeneralData[]>(`
		*[_type == 'general' && preset == 'main'] {
			preset,
			contact,
			direct_contact,
		}
	`)
	const mainData = generalData[0];
	return (
		<main id='page_contacts'>
			<section className='send-message'>
				<div className="confine">
					
					<article className='text-part'>
							<img src="/decors/palette-list.png" alt="" className="decor_palette" />
							<h2> Send a Message</h2>
							<p>{mainData.contact}</p>
							<div className="email">
								<a href="mailto:cryckat@gmail.com"><IoMail/> cryckat@gmail.com</a>
							</div>
					</article>
					<form action="https://formsubmit.co/9672d6f918601b242a8e9ec8e8fec231 " method='POST' className='form-part'>
						{/* Metadata */}
						<input type="hidden" name="_subject" value="New contact submission from Gremlili Studio Website!"></input>
						<input type="hidden" name="_cc" value="cryckat@gmail.com"></input>
						<div className="field-group">
							<div className="field">
								<label htmlFor="identification">Identification <span className='detail'>(required)</span></label>
								<input required type="text" name='identification'  placeholder='Enter your name/alias and pronouns'/>
							</div>
							<div className="field">
								<label htmlFor='email' >Email <span className='detail'>(required)</span></label>
								<input  required type="email" name='email'  placeholder='Enter your email'/>
							</div>
						</div>
							<div className="field">
								<label htmlFor="social_media">Social Media</label>
								<input type="text" name='social_media'  placeholder='Enter your most used social media'/>
							</div>
							<div className="field">
								<label  htmlFor="subject">Subject</label>
								<input required type="text" name='subject'  placeholder='The subject of your inquiry'/>
							</div>
							<div className="field">
								<label  htmlFor="message">Message</label>
								<textarea required name="message" placeholder='Enter your message here. . .' id="message-field"></textarea>
							</div>

							<div className="action">
								<button type='submit' className='btn btn-colored gold btn-send'>
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
							<p>{mainData.direct_contact}</p>
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