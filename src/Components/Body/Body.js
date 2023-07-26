import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Corousel from '../Corousel/Corousel'
import "./Body.css";
import ShimmerRestro from '../shimmer/ShimmerRestro';
import { Link } from 'react-router-dom';
import useOnline from '../../Utils/useOnline';


const imgUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

function Body() {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestra, setfilteredRestra] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  

  async function getRestaurants() {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4591284&lng=73.8777412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
      console.log("data", data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      const restaurantsData = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants || [];
      setRestaurant(restaurantsData);
      setfilteredRestra(restaurantsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function filteredRestaurant(searchText, restaurantList) {
    const filteredRestra = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestra(filteredRestra);
    console.log("filteredRestra", filteredRestra);
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchText(value);
    filteredRestaurant(value, restaurants);
  }

  const offline = useOnline()
  if (offline== false) return <h3>Oops... Check your Internet</h3>;

  return   (
    <>
       <Corousel/>
      <div className='restrosearch'>
        <h2 className='text-4xl'>Restaurants with online food delivery</h2>
        <div>
          <input
            placeholder='Search'
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {(filteredRestra.length === 0) ? (<ShimmerRestro />) : (
      <div className='Body'>
        {filteredRestra.map((item, index) => {
          return (
            <Link to={'/restra-detail/'+ item.info.id}>
            <div className="restrocard" key={index}>
              <img src={imgUrl + item.info.cloudinaryImageId} alt='restro Img' />
              <p className="truncate ...">{item.info.name}</p>
              <div className="rating-container">
                <AiFillStar />
                <p>{item.info.avgRating}</p>
              </div>
              <p>{item.info.areaName}</p>
            </div>
            </Link>
          );
        })}
      </div>
      )}
    </>
  );
}

export default Body;
