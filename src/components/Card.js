import React from "react";
// import 'font-awesome/css/font-awesome.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Card = (props) => {

    const current = Object.values(props.data.timeframes)[0].current;
    const previous = Object.values(props.data.timeframes)[0].previous;
    const schedule = Object.keys(props.data.timeframes)[0];
    const title = props.data.title;

    function getPerivious(){
        if (schedule === "daily"){
            return "Yesterday";
        } else if (schedule === "weekly"){
            return "Last Week";
        }
        return "Last Month";        
    }

    function bgColor(){
        if (title === "Study"){
            return "purple";
        }
        if (title === "Work"){
            return "green";
        }
        if (title === "Self Care"){
            return "yellow";
        }
        if (title === "Social"){
            return "blue";
        }
        if (title === "Exercise"){
            return "red";
        }
        return "orange"
    }

    return (
        <div className={bgColor() + ' card'}>
        <div className="card-head">
          <i className="fa fa-briefcase fa-6" aria-hidden="true"></i>
        </div>
        <div className="card-content">
          <div className="card-content-head">
            <span>{title}</span>
            <span>...</span>
          </div>
          <div className="card-body">
            <h2 className="big">{current}hrs</h2>
            <p className="description">{getPerivious()} {previous}</p>
           </div>
        </div>
      </div>
    )
}

export default Card;