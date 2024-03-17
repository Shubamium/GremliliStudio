import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Footer from "./components/footer/Footer";
import GalleryViewPopUp from "./components/galleryViewPopUp/GalleryViewPopUp";
import TermsPopUpHandler from "./components/termsPopUpHandler/TermsPopUpHandler";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

const quicksand = Quicksand({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"] });


const meta = {
	title: "Gremlili Studio",
  description: `
	I'm a one-person studio crafting all sorts of cool stuff for creators and VTubers, like logos, panels, overlays, emotes, Live2D models, character design, and more!
	`,
}


const title = meta.title

const description = meta.description
const banner = 'https://i.ibb.co/N6NyvND/bannerstudio.png'

export const metadata: Metadata = {
	title: title,

	metadataBase: new URL('https://gremlili-studio.vercel.app/'),

	openGraph:{
		url:'https://gremlili-studio.vercel.app/',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
	description: description
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}style={{'--fontMain':quicksand.style.fontFamily,'--fontAlt':fredoka.style.fontFamily} as CSSProperties} >
				<GalleryViewPopUp/>
				<TermsPopUpHandler/>
				{children}
				<Footer/>
				<LoadingScreen/>
			</body>
    </html>
  );
}
