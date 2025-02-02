import React from 'react'
import { Input } from '@rneui/themed'

type ContentUpdateInputProps = {
    value: string;
    onChangeText: (text: string) => void;
}

const ContentUpdateInput:React.FC<ContentUpdateInputProps> = ({ value, onChangeText }) => {
  return (
    <Input 
        multiline={true}
        numberOfLines={20}
        value={value}
        onChangeText={onChangeText}
    />
  )
}

export default ContentUpdateInput;