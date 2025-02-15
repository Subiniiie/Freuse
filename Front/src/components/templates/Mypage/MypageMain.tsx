import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Profile from '../../molecules/Mypage/Profile'
import Btns from '../../organisms/Mypage/Btns'
import MypageStyles from '../../../styles/Mypage/MypageStyles'
import useMain from '../../../hooks/Mypage/useMain'


export default function MypageMain() {
  
  const { getUserInfo } = useMain();

  useFocusEffect(
    useCallback(() => {
      getUserInfo()
    }, [])
  );

  return (
    <View style={MypageStyles.contentContainer}>
        <Profile />
        <Btns />
    </View>
  )
}
