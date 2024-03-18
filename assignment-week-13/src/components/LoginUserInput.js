import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function LoginUserInput({propData}) {

    // Reference for handling input field
    let inputField = useRef();

    // On value change in field, reassign field value to corresponding property object
    function handleChange() {
        propData.UserName = inputField.current.value;
    }
 
    return (
        <>
            <label htmlFor="userName" className='form-label'>Username</label>
            <input type='text' ref={inputField} className='form-control mb-5' id='userName' onChange={handleChange} />
        </>
    )
}
