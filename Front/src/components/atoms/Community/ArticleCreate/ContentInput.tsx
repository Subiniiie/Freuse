import React from 'react'
import { Input } from '@rneui/themed'

export default function ContentInput() {
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
    />
  )
}