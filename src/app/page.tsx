import { FaArrowRight, FaPaintBrush, FaPalette } from 'react-icons/fa';
import './home.scss'
import Link from 'next/link';
import { BiPaintRoll } from 'react-icons/bi';
import { fetchData } from '@/db/db';
import { PortableText } from 'next-sanity';

export type GeneralData = {
  preset: string;
  home: {
    intro: string;
    notice: any[];
    commission: string;
  };
  contact: string;
  direct_contact: string;
  footer: string;
  section_desc: {
    graphics_desc: string;
    models_desc: string;
    adoptable_desc: string;
	}
};

export default async function Home() {
	
	const generalData = await fetchData<GeneralData[]>(`
		*[_type == 'general' && preset == 'main'] {
			preset,
			home {
				intro,
				notice,
				commission
			},
			
		}
	`)
	const mainData = generalData[0];

  return (
    <main className={'page_home'} id='page_home'>
			<section className="banner-part">
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splat' />
				<img src="/graphics/logo.png" alt="" className='banner' />
			</section>

			<section className='intro-text'>
				<p>{mainData.home.intro}</p>
				<div className="action">
					<div className="decor_edge">
						<FaPalette/>
					</div>
					<a href='https://vgen.co/Gremlili' target='_blank' className="btn btn-colored green btn-logo">
						<img src="/graphics/vgen-badge.png" alt="" />
						<span>Order on VGEN !</span>
					</a>
					<a href='https://trello.com/b/bKUi7YlW/gremlili-commissions' target='_blank' className="btn btn-colored btn-logo">
						<img src="/graphics/trello-badge.png" alt="" />
						<span>Commission Tracker!</span>
					</a>
					<Link href='/graphics' className="btn btn-colored gold btn-arrow">
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
						<PortableText
							value={mainData.home.notice}
						/>
					</article>
				</div>
			</section>

			<section className='commission-info shadow'>
				<div className="confine">
					<article className='shadow'>
						<h2>COMMISSION</h2>
						<p>{mainData.home.commission}</p>
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
