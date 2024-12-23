import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import SignUpMain from '../../components/templates/Auth/SignUpMain'


export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})