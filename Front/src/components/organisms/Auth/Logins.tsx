import React from 'react'
import LoginInputs from '../../molecules/Auth/LoginInputs'
import LoginInputBtn from '../../atoms/Auth/Login/LoginInputBtn'
import useLogin from '../../../hooks/Auth/Login/useLogin'


export default function Logins() {
  const { handleChange, getValueIndex, getFieldIndex, submitLoginForm } = useLogin();

  return (
    <>
        <LoginInputs 
          handleChange={handleChange}
          getValueIndex={getValueIndex}
          getFieldIndex={getFieldIndex}
        />
        <LoginInputBtn 
          submitLoginForm={submitLoginForm
            
          }
        />
    </>
  )
}
