import ArtCategoryDisplayer from '@/app/components/artCategoryDisplayer/ArtCategoryDisplayer'
import PageTitle from '@/app/components/pageTitle/PageTitle'
import React from 'react'
import './model.scss'
import { CategoryData, category, categoryDataToCategoryList } from '../graphics/page'
import { IoIosCheckmark } from 'react-icons/io'
import { FaArrowRight } from 'react-icons/fa'
import { fetchData } from '@/db/db'
import { GeneralData } from '@/app/page'
import PricePanel from '@/app/components/pricePanel/PricePanel'

type Props = {}

// const sampleData:category[] = [
// 	{
// 		title:'Twitch Assets',
// 		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 		renderType:0,
// 		imageList:[
// 			'https://picsum.photos/id/59/350/350',
// 			'https://picsum.photos/id/59/350/350',
// 			'https://picsum.photos/id/59/350/350',
// 		]
// 	},
// 	{
// 		title:'Logo',
// 		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 		renderType:0,
// 		imageList:[
// 			'https://picsum.photos/id/59/350/350',
// 			'https://picsum.photos/id/59/350/350',
// 			'https://picsum.photos/id/59/350/350',
// 		],
// 		pricing:[
// 			{
// 				name:'Full Render',
// 				price:'$40/each',
// 			},
// 			{
// 				name:'Full Render',
// 				price:'$40/each',
// 			}
// 		]
// 	}
// ]

export type PricingData = {
	title: string;
  price: string;
  includes: string[];
  addons: {
    title: string;
    price: string;
  }[];
  extra?: {
    button: string;
    image: string;
  };
}
export default async function page({}: Props) {

		const generalData = await fetchData<GeneralData[]>(`
		*[_type == 'general' && preset == 'main'] {
			preset,
			section_desc
		}
	`)
	const mainData = generalData[0];
	const modelsData = await fetchData<CategoryData[]>(`
		*[_type == 'models'] {
			data{
					category,
					desc,
					imageList,
					pricing,
					display
			}
		}
	`)
	const modelsPricingData = await fetchData<PricingData[]>(`
		*[_type == 'models_price'] {
			title,
			price,
			includes[],
			addons[] {
				title,
				price
			},
			'extra': extra {
				button,
				'image': image.asset->url
			}
		}
`)
	return (
		<main id='page_models'>
			<PageTitle
				title='Models'
				type='models'
				description={mainData.section_desc.models_desc}
			/>
			<section className='models-pricing'>
				<img src="/decors/splatter-green.png" alt="" className='decor_splatter br' />
				<img src="/decors/splatter-pink.png" alt="" className='decor_splatter tl' />
				<img src="/decors/splatter-purple.png" alt="" className='decor_splatter tr' />
				<img src="/decors/splatter-yellow.png" alt="" className='decor_splatter bl' />
				{/* <div className="price-panel">
					<div className="price">
						<p>$100 <span className='unit'>USD</span></p>
					</div>
					<h2 className='title'>Gremlin Model (YCH)</h2>
					<div className="includes">
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
					</div>
					<div className="extras">
						<button className='btn btn-expression'>View Simple Expression List <FaArrowRight/></button>
						<div className="extra-price-list">
							<div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div>
							<div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div>
						</div>
					</div>
				</div>
				<div className="price-panel">
					<div className="price">
						<p>$100 <span className='unit'>USD</span></p>
					</div>
					<h2 className='title'>Gremlin Model (YCH)</h2>
					<div className="includes">
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
					</div>
					<div className="extras">
						<div className="extra-price-list">
							<div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div>
					
						</div>
					</div>
				</div>
				<div className="price-panel">
					<div className="price">
						<p>$100 <span className='unit'>USD</span></p>
					</div>
					<h2 className='title'>Gremlin Model (YCH)</h2>
					<div className="includes">
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
						<div className="include">
							<div className="icon"><IoIosCheckmark/></div>
							<div className="text">
								<p>Fully Rendered and All details included on a smaller scale/chibi cutesy style body</p>
							</div>
						</div>
					</div>
					<div className="extras">
						<button className='btn btn-expression'>View Simple Expression List <FaArrowRight/></button>
						<div className="extra-price-list">
							<div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div>
							<div className="extra-price">
								<h2>3$</h2>
								<p>1x Simple Expressions</p>
							</div>
						</div>
					</div>
				</div> */}
				{modelsPricingData.map((price,index)=>{
					return <PricePanel
					key={price.title+'-panel-'+index}
					delay={index+1}
					{...price}
				/>
				})}
			</section>	
			<ArtCategoryDisplayer
				categoryList={categoryDataToCategoryList(modelsData)}
			/>
		</main>
	)
}