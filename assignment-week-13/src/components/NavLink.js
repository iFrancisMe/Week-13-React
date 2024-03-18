import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function NavLink({link}) {
    let href = ''; // for target
    let value = ''; // for value as displayed in navbar

    // Extract properties to variables
    if (link !== undefined) {
        href = link.href;
        value = link.value;
    }
 
    return (
    <li className="nav-item">
        <a className="nav-link text-white" href={href}>{value}</a>
    </li>
  )
}
