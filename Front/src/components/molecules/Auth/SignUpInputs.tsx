import React from 'react'
import SignUpInput from '../../atoms/Auth/SignUpInput'
import signUpData from '../../../data/Auth/SignUpData'
import useSignup from '../../../hooks/Auth/Signup/useSignup';
import { SignUpFormData } from '../../../types/SignUpData';

type SignUpInputsProps = {
  handleChange: (field: keyof SignUpFormData) => (text: string) => void;
  getValueIndex: (index: number) => string;
  getFieldIndex: (index: number) => keyof SignUpFormData;
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
