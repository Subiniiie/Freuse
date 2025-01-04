import React from 'react'
import { Button } from '@rneui/themed'
import useSignup from '../../../hooks/Auth/Signup/useSignup'

export default function SignUpSubmitBtn() {
  const { submitSignupForm } = useSignup();

  return (
    <Button 
        title={'회원가입'}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
        onPress={submitSignupForm}
    />
  )
}
