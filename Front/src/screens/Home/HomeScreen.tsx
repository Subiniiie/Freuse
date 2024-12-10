import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CustomText from '../../styles/fonts/CustomText'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText fontStyle='PaperlogyBlack' style={{ fontSize: 20 }}>
        프라이탁 이야기
      </CustomText>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white'
  }
})