import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useMain from '../../hooks/Home/useMain'

export default function ElectronicAccessoriesMainScreen() {
  const { getCategoryArticles } = useMain();

  useFocusEffect(() => {
    getCategoryArticles("electronicAccessary");
  });
  
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