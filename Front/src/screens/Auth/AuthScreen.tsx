import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import AuthMain from '../../components/templates/Auth/AuthMain'

export default function AuthScreen() {
    console.log('렌더링됨')
  return (
    <SafeAreaView style={styles.container}>
        <AuthMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})
