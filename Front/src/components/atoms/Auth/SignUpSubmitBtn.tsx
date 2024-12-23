import React from 'react'
import { Button } from '@rneui/themed'

export default function SignUpSubmitBtn() {
  return (
    <Button 
        title={'회원가입'}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
    />
  )
}
