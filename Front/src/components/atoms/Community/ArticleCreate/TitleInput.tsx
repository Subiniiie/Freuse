import React from 'react'
import { Input } from '@rneui/themed'

type TitleInputProps = {
  value: string;
  onChangeText: (text: string) => void;
}

const TitleInput:React.FC<TitleInputProps> = ({ value, onChangeText }) => {
  return (
    <Input 
        placeholder='제목을 입력하세요.'
        inputContainerStyle={{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
        }}
        value={value}
        onChangeText={onChangeText}
    />
  )
}

export default TitleInput;