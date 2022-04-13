import React from "react";
import Card from "./Card";


const CardList = (props) => {
    
    return (
        <div className="main-container">
                {props.data.map((item, index) => {
                    return (
                        <Card key={index} data={item} />
                    )
                })}
        </div>
    )
};

export default CardList;
