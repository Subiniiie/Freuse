import React from 'react';
import { SearchBar } from '@rneui/themed';
import { View } from 'react-native';
import SearchStyles from '../../../styles/Search/SearchStyles';

export default function InputBox() {
  return (
    <View style={SearchStyles.searchBarContainer}>
      <SearchBar 
        placeholder='검색어를 입력하세요.'
      />
    </View>
  )
};