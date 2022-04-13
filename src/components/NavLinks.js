import React from "react";

const NavLinks = (props) => {

    function handleClick(e){
        e.preventDefault();
        props.data.onClick(e.target.textContent);
        // add active class to clicked item
        let clickedLink = e.target;
      
        // remove active class from all other items
        let navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if(link !== clickedLink){
                link.classList.remove('active');
            }
        });
        clickedLink.classList.add('active');
     }
    return (
        <nav>
        <ul>
         {props.data.filters.map((item, index) => {
                return (
                    <li key={index}>
                        <a href='/' onClick={handleClick} className="nav-link">{item}</a>
                    </li>
                )
         })}
        </ul>
        </nav>
    )
}

export default NavLinks;