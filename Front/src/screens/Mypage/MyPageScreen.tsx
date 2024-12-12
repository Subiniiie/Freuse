import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPageScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})