import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import LoginMain from '../../components/templates/Auth/LoginMain'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})