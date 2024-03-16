import React from 'react'
import './footer.scss'
import Link from 'next/link'
import { IoMail } from 'react-icons/io5'
import { FaTwitter } from 'react-icons/fa'
import { CgArrowTopRightO } from 'react-icons/cg'
import { GeneralData } from '@/app/page'
import { fetchData } from '@/db/db'
type Props = {}

export default async function Footer({}: Props) {
	const generalData = await fetchData<GeneralData[]>(`
	*[_type == 'general' && preset == 'main'] {
		preset,
		footer
	}
`)
const mainData = generalData[0];

	return (
		<footer id="footer">
			<div className="confine">
				<div className="info-part">
					<img src="/graphics/logo_white.png" alt="" className='footer-logo' />
					<p>{mainData.footer}</p>
					<a href="https://twitter.com/gremlilistudio" className='credits' target="_blank">©2022 by Gremlili and Shubamium</a>
				</div>
				<div className="misc-part">
					<img src="/decors/splat-list.png" alt="" className='decor_splat' />
					<div className="footer-nav">
						<h2>NAVIGATION</h2>
						<div className="links-list">
							<div className="links">
								<Link href={'/'} className='link'>HOME</Link>
								<Link href={'/contacts'} className='link'>CONTACT</Link>
							</div>
							<div className="links">
								<Link href={'/adoptables'} className='link'>ADOPTABLES</Link>
								<Link href={'/models'} className='link'>MODELS</Link>
								<Link href={'/graphics'} className='link'>GRAPHICS</Link>
							</div>
						</div>
					</div>
					<div className="socials">
						<div className="socials-list">
							<h2>LINKS</h2>
							<div className="list">
								<a href='mailto:cryckat@gmail.com' className="social">
									<div className="icon">
										<IoMail/>
									</div>
								</a>
								<a href='https://twitter.com/GremliliStudio' className="social">
									<div className="icon">
										<FaTwitter/>
									</div>
								</a>
								<a href='https://vgen.co/gremlilian' className="social vgen">
									<div className="icon">
										<img src="/graphics/vgen-badge.png" alt="" />
									</div>
								</a>
								<a href='https://trello.com/b/bKUi7YlW/gremlili-commissions' className="social">
									<div className="icon">
										<img src="/graphics/trello-badge.png" alt="" />
									</div>
								</a>
							
							</div>
						</div>
						<a href="#" className='btn btn-colored gold'>Back to the top <CgArrowTopRightO/></a>
					</div>
				</div>
			</div>
		</footer>
	)
}