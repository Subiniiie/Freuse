import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import MypageMain from '../../components/templates/Mypage/MypageMain'

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MypageMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})