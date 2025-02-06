import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function WalletsMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WalletsMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})