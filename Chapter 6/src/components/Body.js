import { useState, useEffect } from "react";
import Card from "./Card.js"
import { DATA_API } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
  

const Body = () => {
    const [filterList, setFilterList] = useState([]);
    const fetchData = async () => {
        const rawData = await fetch(DATA_API);
        const dataJson = await rawData.json();
        setFilterList(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {
        fetchData();
    },[]);
    if(filterList.length === 0){
        return <Shimmer />
    }
    return (
        <div className="body-container">
            <button className="filter-btn" onClick={() => {
                const resultList = filterList.filter((res) => res.info.avgRating > 4.2);
                console.log(resultList);
                setFilterList(resultList);
            }}>
                Top Rated Restaurants
            </button>
            <div className="card-container">
                {
                    filterList.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};


export default Body;