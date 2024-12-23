import React from 'react'
import { Input } from '@rneui/themed'
import { SignUpData } from '../../../types/SignUpData'

type SignUpComponentsProps = {
    data: SignUpData;
};


const SignUpInput: React.FC<SignUpComponentsProps> = ({ data }) => {
  return (
    <Input 
        placeholder={data.title}
    />
  )
}

export default SignUpInput;