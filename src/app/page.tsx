import { FaArrowRight, FaPaintBrush, FaPalette } from 'react-icons/fa';
import './home.scss'
import Link from 'next/link';
import { BiPaintRoll } from 'react-icons/bi';

export default function Home() {
  return (
    <main className={'page_home'} id='page_home'>
			<section className="banner-part">
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splat' />
				<img src="/graphics/logo.png" alt="" className='banner' />
			</section>

			<section className='intro-text'>
				<p>Introductory text here about what you’re providing in general 
and an invite to commission you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<div className="action">
					<div className="decor_edge">
						<FaPalette/>
					</div>
					<a href='https://vgen.co/Gremlili' target='_blank' className="btn btn-colored green btn-logo">
						<img src="/graphics/vgen-badge.png" alt="" />
						<span>Order on VGEN !</span>
					</a>
					<a href='https://vgen.co/Gremlili' target='_blank' className="btn btn-colored btn-logo">
						<img src="/graphics/trello-badge.png" alt="" />
						<span>Commission Tracker!</span>
					</a>
					<Link href='/models' className="btn btn-colored gold btn-arrow">
						<span>View my works </span>
						<FaArrowRight/>
					</Link>
					<div className="decor_edge">
						<FaPaintBrush/>
					</div>
				</div>

			</section>

			<section className='notice shadow'>
				<div className="confine">
					<img src="/decors/splatter-pack.png" alt="" className='splatter' />
					<figure>
						<img src="/graphics/grem-chibi.png" alt="" className='grem-chibi' />
					</figure>
					<article>
						<div className="title">
							<BiPaintRoll/> 
							<h2>NOTICE</h2>
						</div>
						<p> <strong>I operate as a solo artist studio</strong>, relying on commissions for sustenance. {`It's`} important to note that I am legally disabled, which can result in a <strong>slower pace of work</strong> compared to other artists. Depending on the nature of the commission, my waitlist may <strong>extend up to six months</strong>. If you require a substantial volume of assets in a short timeframe, I may not be the most suitable artist for your needs. </p>
						<p>For further details, please reach out to me to discuss the turnaround time, as it can vary based on the specific item, and I may be able to accommodate rush requests with applicable.</p>
					</article>
				</div>
			</section>

			<section className='commission-info shadow'>
				<div className="confine">
					<article className='shadow'>
						<h2>COMMISSION</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</article>
					<figure>
						<img src="/graphics/grem-pfp.png" alt=""  className='shadow'/>
					</figure>
				</div>
			</section>
			
			<div className="commission-list">
				<div className="confine">
					<Link href={'/models'} className='btn btn-coms'>
						<img src="/graphics/model-placeholder.webp" className='main-img' alt="" />
						<img src="/decors/decor_palette.png" alt="" className='decor palette' />
						<img src="/decors/decor_stripe.png" alt="" className='decor stripe' />
						<img src="/decors/splatter_white.png" alt="" className='decor splatter' />
						<span className='title'>VTUBER MODELS</span>
						<span className='works-view'>View Works <FaArrowRight/></span>
					</Link>
					<Link href={'/adoptables'} className='btn btn-coms adopt '>
						<img src="/graphics/adoptable_placeholder.webp" className='main-img' alt="" />
						<img src="/decors/decor_palette.png" alt="" className='decor palette' />
						<img src="/decors/decor_stripe.png" alt="" className='decor stripe' />
						<img src="/decors/splatter_white.png" alt="" className='decor splatter' />
						<span className='title'>ADOPTABLES</span>
						<span className='works-view'>View Works <FaArrowRight/></span>
					</Link>
					<Link href={'/graphics'} className='btn btn-coms graphics'>
						<img src="/graphics/graphics-placeholder.png" className='main-img' alt="" />
						<img src="/decors/decor_palette.png" alt="" className='decor palette' />
						<img src="/decors/decor_stripe.png" alt="" className='decor stripe' />
						<img src="/decors/splatter_white.png" alt="" className='decor splatter' />
						<span className='title'>GRAPHICS</span>
						<span className='works-view'>View Works <FaArrowRight/></span>
					</Link>
				</div>
			</div>
    </main>
  );
}
