import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useMain from '../../hooks/Home/useMain'

export default function WalletsMainScreen() {
  const { getCategoryArticles } = useMain();

  useFocusEffect(
    useCallback(() => {
      getCategoryArticles("wallet");
    }, [getCategoryArticles])
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>WalletsMainScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})