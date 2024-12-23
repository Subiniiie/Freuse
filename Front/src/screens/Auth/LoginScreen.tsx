import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})