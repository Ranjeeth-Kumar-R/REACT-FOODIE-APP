import React, { useState , useEffect} from "react";
import './Restaurent.css';
import HeaderBar from "../HeaderBar/HeaderBar";
import RestaurentCard from "../RestaurentCard/RestaurentCard";
const Restaurent=() => {
    const [data, SetData] = useState([]);

    useEffect(() => {
        const fetchRestaurentList = async () => {
            let response= await fetch("http://myjson.dit.upm.es/api/bins/4k1m");
            const data = await response.json();
            if(data.length > 0){
                SetData(data)
            }
        };
        fetchRestaurentList();
    },[]);

    return(
        <div className="restuarent-list-container">
            <HeaderBar />
            <div className="restaurent-list-wrapper child">
                {data.map((res) => {
                    return(
                        <div key={res.id + res.name}>
                            <RestaurentCard key={res.id} restaurent={res} />
                        </div>
                    );
                    
                })}
            </div>
        </div>
    );
};
export default fetchRestaurentList;
