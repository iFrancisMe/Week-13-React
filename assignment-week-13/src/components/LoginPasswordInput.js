import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function LoginPasswordInput({propData}) {

    // Reference for handling password field
    let inputField = useRef();

    // On value change in field, reassign field value to corresponding property object
    function handleChange() {
        propData.Password = inputField.current.value;
    }
 
    return (
        <>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type='password' ref={inputField} className='form-control mb-5' id='password' onChange={handleChange} />
        </>
    )
}