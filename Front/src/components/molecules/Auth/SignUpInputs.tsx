import React from 'react'
import SignUpInput from '../../atoms/Auth/SignUpInput'
import signUpData from '../../../data/Auth/SignUpData'

export default function SignUpInputs() {
  return (
    <>
        {signUpData.map((item) => (
            <SignUpInput 
                key={item.id}
                data={item}
            />
        ))}
    </>
  )
}
