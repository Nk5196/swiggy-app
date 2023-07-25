import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestraDetail.css'
const imgUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

const RestraDetail = () => {
    const params = useParams();
    const { id } = params
    console.log("params", params)
    const [restra, setRestra] = useState({});
    useEffect(() => {
        restraurant(id)
    }, [])

    async function restraurant(id) {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4591284&lng=73.8777412&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const jsonData = await data.json();
       // console.log("jsonData--->>>", jsonData)
        setRestra(jsonData.data.cards[0]?.card?.card?.info)
    }
   // console.log("restra", restra);

    

    return <>
        <h3>Restra details{id}</h3>
        <div>
            <div>
            <h3>{restra.name}</h3>
            <img src={imgUrl + restra.cloudinaryImageId} alt='restro Img' />
            </div>
            <div></div>
        </div>
    </>
}
export default RestraDetail;
