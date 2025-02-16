import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from '@rneui/themed'
import { useFocusEffect } from '@react-navigation/native'
import Profile from '../../molecules/Mypage/Profile'
import Btns from '../../organisms/Mypage/Btns'
import MypageStyles from '../../../styles/Mypage/MypageStyles'
import useMain from '../../../hooks/Mypage/useMain'
import useUserStore from '../../../store/Auth/UserStore'

export default function MypageMain() {
  
  const { getUserInfo } = useMain();
  const { setProfileUrl, profileUrl } = useUserStore();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useFocusEffect(
    useCallback(() => {
      getUserInfo().then(() => setIsLoading(false));
    }, [setProfileUrl])
  );

  useEffect(() => {
    if (profileUrl) {
      console.log('프로필 URL이 업데이트됨:', profileUrl);
    }
  }, [profileUrl]);

  return (
    <View style={MypageStyles.contentContainer}>
      {isLoading ? (
        <Text>로딩 중</Text>
      ) : (
        <>
          <Profile />
          <Btns />
        </>
      )}    
    </View>
  )
}
