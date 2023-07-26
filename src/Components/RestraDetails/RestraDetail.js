import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestraDetail.css'

const imgUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

const RestraDetail = () => {
    const params = useParams();
    const { id } = params
    console.log("params", params)
    const [restra, setRestra] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetchRestraurant(id); // Rename function to fetchRestaurant
    }, [id]); // Include id in the dependency array to refetch when id changes

    async function fetchRestraurant(id) { // Rename function to fetchRestaurant
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4591284&lng=73.8777412&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const jsonData = await data.json();
        setRestra(jsonData.data.cards[0]?.card?.card?.info);
        setLoading(false); // Set loading to false after data is fetched
    }

    if (loading) {
        return <div>Loading...</div>; // Return a loading indicator while data is fetched
    }

    return (
        <>
            <h3>Restra details</h3>
            <div>
                <div>
                    <h4>{restra.name}</h4>
                    <img src={imgUrl + restra.cloudinaryImageId} alt='restro Img' />
                    <p>{restra.areaName}</p>
                    <p>{restra.cuisines[0]}</p>
                </div>
                <div>
                    {/* Add additional details about the restaurant here */}
                </div>
            </div>
        </>
    );
}

export default RestraDetail;
