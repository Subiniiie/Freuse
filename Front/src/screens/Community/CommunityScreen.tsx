import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CommunityMain from '../../components/templates/Community/CommunityMain'

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CommunityMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})