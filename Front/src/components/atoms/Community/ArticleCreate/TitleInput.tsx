import React from 'react'
import { Input } from '@rneui/themed'

export default function TitleInput() {
  return (
    <Input 
        placeholder='제목을 입력하세요.'
        inputContainerStyle={{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
        }}
    />
  )
}