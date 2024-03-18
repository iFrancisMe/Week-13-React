import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function LoginButton({propData}) {
  return (
    <div className='m-auto'>
        <input type='button' className='btn btn-primary' value={'Login'} onClick={propData.onClick} />
    </div>
  )
}
 