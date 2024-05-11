import React from "react";
import "./artBox.scss";
import { RiFullscreenFill } from "react-icons/ri";
import { HiArrowsExpand } from "react-icons/hi";
import { ImageEventData } from "../../galleryViewPopUp/GalleryViewPopUp";

type Props = {
  image: string;
  isPortrait?: boolean;
  fullClick?: boolean;
};

export default function ArtBox({ image, isPortrait, fullClick }: Props) {
  const show = () => {
    const event = new CustomEvent<ImageEventData>("modal_gallery", {
      detail: {
        image: image,
      },
    });
    document.body.dispatchEvent(event);
  };
  return (
    <div
      className={`art-box shadow ${isPortrait ? "portrait" : "box"} ${
        fullClick ? "full" : ""
      }`}
      onClick={() => {
        if (fullClick) {
          show();
        }
      }}
    >
      <img src={image} alt="" className="main-img" />
      <button className="btn btn-fs" onClickCapture={show}>
        <HiArrowsExpand />
      </button>
      <img src="/decors/splatter-purple.png" alt="" className="decor top" />
      <img src="/decors/splatter-pink.png" alt="" className="decor bottom" />
      <img
        src="/decors/decor_palette.png"
        alt=""
        className="decor decor_palette"
      />
    </div>
  );
}
