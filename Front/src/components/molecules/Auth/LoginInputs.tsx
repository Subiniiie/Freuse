import React from 'react'
import { View } from 'react-native'
import LogInInput from '../../atoms/Auth/Login/LogInInput'
import { LogInFormData } from '../../../types/Auth/LogInData'
import logInData from '../../../data/Auth/LogInData'

type LoginInputsProps = {
  handleChange: (field: keyof LogInFormData) => (text: string) => void;
  getValueIndex: (index: number) => string;
  getFieldIndex: (index: number) => keyof LogInFormData;
}

export default function LoginInputs({ handleChange, getValueIndex, getFieldIndex}: LoginInputsProps) {
  return (
    <>
      {logInData.map((item, index) => (
        <LogInInput 
          key={item.id}
          data={item}
          value={getValueIndex(index)}
          onChangeText={handleChange(getFieldIndex(index))}
          secureTextEntry={index == 1}
        />
      ))}
    </>
  )
}
