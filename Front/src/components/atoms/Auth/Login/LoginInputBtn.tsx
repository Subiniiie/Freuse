import React from 'react'
import { Button } from '@rneui/themed'

export default function LoginInputBtn() {
  return (
    <Button 
        title={'로그인'}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
    />
  )
}
