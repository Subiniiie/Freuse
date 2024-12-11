import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import SearchMain from '../../components/templates/Search/SearchMain'

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})