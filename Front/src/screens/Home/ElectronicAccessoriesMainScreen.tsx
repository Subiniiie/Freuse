import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function ElectronicAccessoriesMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ElectronicAccessoriesMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})