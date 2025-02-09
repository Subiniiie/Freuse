import React from 'react'
import { ScrollView } from 'react-native'
import InputBox from '../../../components/atoms/Search/InputBox'
import SearchStyles from '../../../styles/Search/SearchStyles'


export default function SearchMain() {
  return (
    <ScrollView contentContainerStyle={ SearchStyles.contentContainer }>
      <InputBox />
    </ScrollView>
  )
}

