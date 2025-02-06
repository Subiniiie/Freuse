import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function BagsMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>BagsMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
})