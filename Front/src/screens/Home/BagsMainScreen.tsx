import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import useMain from '../../hooks/Home/useMain'

export default function BagsMainScreen() {
  const { getCategoryArticles } = useMain();

  useFocusEffect(() => {
    getCategoryArticles("bag");
  });

  return (
    <SafeAreaView style={styles.container}>
        <Text>BagsMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
})