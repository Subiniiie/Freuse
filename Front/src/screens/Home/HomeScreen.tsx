import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import HomeMain from '../../components/templates/Home/HomeMain'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white',
  },
})