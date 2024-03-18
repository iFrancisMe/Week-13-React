
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavLink from './NavLink';
import HamburgerMenu from './HamburgerMenu';
 

export default function NavBar({props}) {
    // Split props object into descrete arrays to send to child components 
    let links = props.links;
    let menuItems = props.menuItems;
    let navLinks = [] 
    
    // Iterate through links array to create each child component and pass unique object of properties to each
    for (let index = 0; index < links.length; index++) {
        navLinks.push(<NavLink key={index} link={links[index]}/>) // React requires a unique key for each component, so we add 'key' property using index value as key
    }

    return (
        <div className="container" >
            <div className="row nav  bg-primary navbar">
                <div className="col-10">
                    <ul id='navbar' className="nav justify-content-center">
                        {/** navbar nav links to display */}          
                        {navLinks} {/** This is the array of child components we assembled earlier */}
                    </ul>
                </div>
                <div className="col-2 ps-0 text-start">
                    {/** This is a dropdown menu activated with a 'hamburger' div styled as a button */}
                    <HamburgerMenu menuItems={menuItems}/> {/** Pass respective properties objects to child component */}
                </div>
                
            </div>
        </div>
    )
}