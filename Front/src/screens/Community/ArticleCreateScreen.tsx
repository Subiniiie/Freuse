import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ArticleCreateMain from '../../components/templates/Community/ArticleCreateMain'

export default function ArticleCreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ArticleCreateMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})