import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import MenuItem from './MenuItem';
 

export default function HamburgerMenu({menuItems}) {

    let [isClicked, setClick] = useState(false); // Click state

    // Add function to props object to pass to MenuItem component for setting click state here used to hide dropdown menu
    for (let menuItem of menuItems) {
        menuItem.onClick = () => {
            setClick(false);
        }
    }

    // show/hide dropdown menu based on state of isClicked. Visible state implemented in style below
    function handleMenuClick() {
        setClick(!isClicked);
    }

    // Styling for div dropdown
    const dropDownStyle = {
        position: "absolute",
        right: 0,
        // visibility style value based on boolean state of isClicked state variable
        visibility: isClicked ? "visible" : "hidden",
        zIndex: 10 // Z-index allows div to float above other elements rendered below the navbar
    }

    // Assemble MenuItem components as needed based on menuItems array
    let menuItemComponents = [];

    for (let index = 0; index < menuItems.length; index++) {
        menuItemComponents.push(<MenuItem key={index} menuItem={menuItems[index]}/>); // React requires unique key per component so we assign index as key
    }

    return (
        <>
            <button className="rounded bg-primary border-secondary" type="button" onClick={handleMenuClick}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavDropdown" style={dropDownStyle} className=" navbar-collapse bg-dark text-white mt-2 w-25" >
                <ul className="navbar-nav">
                    {menuItemComponents}
                </ul>
            </div>
        </>
    )
}
