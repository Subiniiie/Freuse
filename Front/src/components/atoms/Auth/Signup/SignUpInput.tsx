import React from 'react'
import { Input } from '@rneui/themed'
import { SignUpData } from '../../../../types/Auth/SignUpData'

type SignUpComponentsProps = {
    data: SignUpData;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
};




const SignUpInput: React.FC<SignUpComponentsProps> = ({ data, value, onChangeText, secureTextEntry }) => {
  return (
    <Input 
        placeholder={data.title}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
  )
}

export default SignUpInput;