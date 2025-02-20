import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.scss';
import GalleryImage1 from '../assets/Gallery1.webp';
import GalleryImage2 from '../assets/Gallery2.webp';
import GalleryImage3 from '../assets/Gallery3.webp';
import GalleryImage4 from '../assets/Gallery4.webp';
import GalleryImage5 from '../assets/Gallery5.webp';
import GalleryImage6 from '../assets/Gallery6.webp';
import GalleryImage7 from '../assets/Gallery7.webp';
import GalleryImage8 from '../assets/Gallery8.webp';
import GalleryImage9 from '../assets/Gallery9.webp';
import GalleryImage10 from '../assets/Gallery10.webp';
import GalleryImage11 from '../assets/Gallery11.webp';


const images = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
    GalleryImage11
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return (
<div className="gallery-parent-container">
<div className="container-gallery">
            <div className="heading">Gallery</div>
            <div className="gallery-box">
            {images.map((image, idx) => (
                <div className="gallery-item" key={idx}>
                    <div className="inner-box" onClick={() => { setIndex(idx); setOpen(true); }}>
                        <img src={image} alt="Gallery Item" />
                    </div>
                </div>
            ))}

            {open && (
                <Lightbox
                    slides={images.map(img => ({ src: img }))}
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    on={{ view: ({ index }) => setIndex(index) }}
                />
            )}
        </div>
        </div>
</div>
    );
};

export default Gallery;
