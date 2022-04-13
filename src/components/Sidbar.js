import React from 'react';
import NavLinks from './NavLinks';

const Sidebar = (props) => {
    return (
        <div className="side">
        <div className="side-head">
          <div className="img-container">
          </div>
           <div className="head-content">
            <p>Report for </p>
            <h2 className="big">Daniel Teshager</h2> 
           </div>
        </div>
        <NavLinks data={props}/>
        </div>
  )
};


export default Sidebar;