import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ArticleItemMain from '../../components/templates/Community/ArticleItemMain'

export default function ArticleItemScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ArticleItemMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})