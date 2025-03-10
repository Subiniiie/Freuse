import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import useMain from '../../hooks/Home/useMain'
import CategoryMain from '../../components/templates/Home/CategoryMain';

export default function PouchesMainScreen() {
  const { getCategoryArticles } = useMain();

  useFocusEffect(
    useCallback(() => {
      getCategoryArticles("pouch");
    }, [getCategoryArticles])
  );

  return (
    <SafeAreaView style={styles.container}>
      <CategoryMain />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})