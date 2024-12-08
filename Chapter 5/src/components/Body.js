import { useState } from "react";
import resList from "../utils/data.json";
import Card from "./Card.js"
  

const Body = () => {
    const [filterList, setFilterList] = useState(resList);

    return (
        <div className="body-container">
            <button className="filter-btn" onClick={() => {
                const resultList = filterList.filter((res) => res.info.avgRating > 4);
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