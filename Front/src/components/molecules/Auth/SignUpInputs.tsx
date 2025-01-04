import React from 'react'
import SignUpInput from '../../atoms/Auth/SignUpInput'
import signUpData from '../../../data/Auth/SignUpData'
import useSignup from '../../../hooks/Auth/Signup/useSignup';

export default function SignUpInputs() {
  const { handleChange, getValueIndex, getFieldIndex } = useSignup();
  return (
    <>
        {signUpData.map((item, index) => (
            <SignUpInput 
                key={item.id}
                data={item}
                value={getValueIndex(index)}
                onChangeText={handleChange(getFieldIndex(index))}
                secureTextEntry={index >= 2}
            />
        ))}
    </>
  )
}
