import React from 'react'
import { Button } from '@rneui/themed'

type SignUpSubmitBtnProps = {
  submitSignupForm: () => void;
}

export default function SignUpSubmitBtn({ submitSignupForm }: SignUpSubmitBtnProps) {

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
