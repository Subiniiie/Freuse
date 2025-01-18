import React from 'react'
import { Text, View } from 'react-native'
import { Dialog } from '@rneui/themed'
import SignUpStyles from '../../../../styles/Auth/SignUpStyles'

export default function SignUpAlert() {
  return (
    <>
      <Dialog
        overlayStyle={SignUpStyles.alertContainer}
      >
          <Text>회원가입에 성공했습니다.</Text>
      </Dialog>
    </>
  )
}

