import React from 'react'
import { ScrollView } from 'react-native'
import SearchBar from '../../molecules/Search/SearchBar'
import SearchStyles from '../../../styles/Search/SearchStyles'


export default function SearchMain() {
  return (
    <ScrollView contentContainerStyle={ SearchStyles.contentContainer }>
        <SearchBar />
    </ScrollView>
  )
}

