import React from 'react'
import { View } from 'react-native'
import ProfileImage from '../../atoms/Mypage/ProfileImage'
import Nickname from '../../atoms/Mypage/Nickname'
import Id from '../../atoms/Mypage/Id'

export default function Profile() {
  return (
    <>
        <ProfileImage />
        <View>
            <Nickname />
            <Id />
        </View>
    </>
  )
}
