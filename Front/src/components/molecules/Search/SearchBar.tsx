import React from 'react'
import { View } from 'react-native'
import InputBox from '../../atoms/Search/InputBox'
import SearchStyles from '../../../styles/Search/SearchStyles'


export default function SearchBar() {
  return (
    <View style={SearchStyles.searchBarContainer}>
        <InputBox />
    </View>
  )
}
