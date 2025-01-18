import React from 'react'
import SignUpInput from '../../atoms/Auth/Signup/SignUpInput'
import signUpData from '../../../data/Auth/SignUpData'
import { SignUpFormDataCheck } from '../../../types/Auth/SignUpData';

type SignUpInputsProps = {
  handleChange: (field: keyof SignUpFormDataCheck) => (text: string) => void;
  getValueIndex: (index: number) => string;
  getFieldIndex: (index: number) => keyof SignUpFormDataCheck;
}

export default function SignUpInputs({ handleChange, getValueIndex, getFieldIndex}: SignUpInputsProps) {

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
