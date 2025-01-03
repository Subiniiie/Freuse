import React from 'react';
import { Input } from '@rneui/themed';

export default function InputBox() {
  return (
    <Input 
      inputContainerStyle={{ flex: 1 }} 
      rightIcon={{ type: 'font-awesome', name: 'times-circle'}}
    />
  )
}