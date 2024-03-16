
import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId:'b3if1d9x',
	dataset:'production',
	apiVersion:'2023-05-03',
	useCdn:false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}

const config = {
	next:{
		revalidate:5
	}
}
export function fetchData<T>(grocQuery:string){
	return client.fetch<T>(grocQuery,{},{...config});
}

