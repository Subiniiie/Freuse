import React from 'react'
import { Input } from '@rneui/themed'

type ContentInputProps = {
  value: string;
  onChangeText: (text: string) => void;
}


const ContentInput:React.FC<ContentInputProps> = ({ value, onChangeText }) => {
  return (
    <Input 
      placeholder='내용을 입력하세요.'
      multiline={true}
      numberOfLines={20}
      inputContainerStyle={{
          borderWidth: 1,
          borderColor: 'green',
          borderRadius: 5,
          height: 270,
      }}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default ContentInput;