import React from 'react';
import './Gallery.scss';

const images = [
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
    "https://media.istockphoto.com/id/668190178/vector/bharatanatyam-or-bharathanatiyam-woman-dancer-vector-ilustration-isolated.jpg?s=1024x1024&w=is&k=20&c=abTq-mu3bgfKSSm8_AzEpXXiOswbesjsP2_TXbf-als=",
];

const Gallery = () => {
    return (
<div className="gallery-parent-container">
<div className="container-gallery">
            <div className="heading">Gallery</div>
            <div className="gallery-box">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <div className="inner-box">
                            <img src={image} alt="Gallery Item" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
</div>
    );
};

export default Gallery;
