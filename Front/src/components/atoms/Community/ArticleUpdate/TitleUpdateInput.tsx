import React from 'react'
import { Input } from '@rneui/themed'

type TitleUpdateInputProps = {
    value: string;
    onChangeText: (text: string) => void;
}

const TitleUpdateInput:React.FC<TitleUpdateInputProps> = ({ value, onChangeText }) => {
  return (
    <Input 
        value={value}
        onChangeText={onChangeText}
    />
  )
}

export default TitleUpdateInput;