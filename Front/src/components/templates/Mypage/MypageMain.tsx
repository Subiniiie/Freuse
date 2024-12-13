import React from 'react'
import { View } from 'react-native'
import Profile from '../../molecules/Mypage/Profile'
import Btns from '../../organisms/Mypage/Btns'
import MypageStyles from '../../../styles/Mypage/MypageStyles'

export default function MypageMain() {
  return (
    <View style={MypageStyles.contentContainer}>
        <Profile />
        <Btns />
    </View>
  )
}
