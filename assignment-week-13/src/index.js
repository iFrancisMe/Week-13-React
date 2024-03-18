import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Defining links and display values for navbar and dropdown menu item components
const props = {
  links: [{href: '#', value: 'Link 1'},{href: '#', value: 'Link 2'},{href: '#', value: 'Link 3'},{href: '#', value: 'Link 4'}],
  menuItems: [{href: '#', value: 'Iem One'},{href: '#', value: 'Item Two'},{href: '#', value: 'Item Three'},{href: '#', value: 'Item Four'}]
}

root.render(
  <React.StrictMode>
    {/* Passing props object to App component */}
    <App props={props}/> 
  </React.StrictMode>
);
