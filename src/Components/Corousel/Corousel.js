import React, { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Corousel.css';
import Shimmer from '../shimmer/Shimmer';

const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
const imgUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
const handleDragStart = (e) => e.preventDefault();

async function corousel1() {
    let data = await fetch(url);
    let jsonData = await data.json();
    let corouseldata = jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info;
    return corouseldata; // Return the corouseldata
}

const Gallery = () => {
    const carouselRef = useRef(null);
    const [corouseldata, setCorouselData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data1 = await corousel1();
            setCorouselData(data1);
        };
        fetchData();
    }, []);

    console.log("corouseldata--->", corouseldata);

    // Ensure that corouseldata is an array before mapping over it
    if (!Array.isArray(corouseldata)) {
        return null;
    }

    const items = corouseldata.map((item, index) => (
        <div key={index}>
            <img
                src={imgUrl + item.imageId}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>
    ));

    return (corouseldata.length === 0) ? (<Shimmer />) : (
        <div className="carousel">
            <AliceCarousel
                mouseTracking
                items={items}
                ref={carouselRef}
                disableButtonsControls={true}
                responsive={{
                    0: { items: 1 },
                    768: { items: 3 },
                }}
            />
        </div>
    );
};

export default Gallery;
