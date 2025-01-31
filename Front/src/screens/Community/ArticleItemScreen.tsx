import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function ArticleItemScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>게시물 상세 페이지</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})