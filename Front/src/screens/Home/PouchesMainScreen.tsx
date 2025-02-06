import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function PouchesMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PouchesMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})