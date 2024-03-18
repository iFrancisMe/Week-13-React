import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
 
export default function MenuItem({menuItem}) {

    // UseState for handling hover effect
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true);
    };

    function handleMouseLeave(){
        setIsHover(false);
    };

    // onClick function defined in props object passed from and handled in parent component
    function handleClick() {
        menuItem.onClick();
    }

    // Menu item styling to add hover effect to item
    const itemStyle = {
        paddingRight: 10,
        opacity: isHover ? .5 : 1
    };

    // DropDown menu item
    return (
        <li className="navbar-item py-1 ps-2 bg-secondary" style={itemStyle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{menuItem.value}</li>
    )
}
