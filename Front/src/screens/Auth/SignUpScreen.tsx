import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { configureLayoutAnimationBatch } from 'react-native-reanimated/lib/typescript/core'

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUpScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})