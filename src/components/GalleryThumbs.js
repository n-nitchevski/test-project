import React from "react"

export default function GalleryThumbs({ images, selectImage, starImage }) {
  return (
    <div className="image-scroller">
      {images.map((image, index) => (
        <div key={index} onClick={selectImage.bind(this, image)} className="thumb-wrapper">
          <img className="thumb" src={image.thumbnail} />
          {image.favorite && (<img className="favorite" src="./star-like.png" onClick={starImage.bind(this, index)} />)}
          {!image.favorite && (<img className="favorite" src="./star-unlike.png" onClick={starImage.bind(this, index)} />)}
        </div>
      ))}
    </div>
  )
}
