import React, { useRef } from 'react'
import LoginButton from './LoginButton'
import 'bootstrap/dist/css/bootstrap.css'
import LoginUserInput from './LoginUserInput';
import LoginPasswordInput from './LoginPasswordInput';
 
export default function LoginForm() {

    // Reference variable to access form element
    let formRef = useRef(); 

    // Object to hold input field variables and onClick function to be initiated from child component
    let propData = {
        UserName: '',
        Password: '',
        onClick: () => {
            console.log(propData.UserName + ' : ' + propData.Password) // Show username and password field values on button click
            formRef.current.reset(); // Reset form on button click
        }
    }

    return (
        <div className='container'>
            <form ref={formRef}>
                <div className='row'>
                    <div className='col-12 mt-5 mb-3 text-primary text-center'>
                        <h3>Login Form</h3>
                    </div>
                    <div className='card py-4 w-75 m-auto'>
                        <LoginUserInput propData={propData} />
                    
                        <LoginPasswordInput propData={propData} />

                        <LoginButton propData={propData}/>
                    </div>
                </div>
            </form>
        </div>
    )
}
