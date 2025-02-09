import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useMain from '../../hooks/Home/useMain'

export default function PouchesMainScreen() {
  const { getCategoryArticles } = useMain();

  useFocusEffect(() => {
    getCategoryArticles("pouch");
  });

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