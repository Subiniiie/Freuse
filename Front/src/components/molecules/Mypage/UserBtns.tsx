import React from 'react'
import UserBtn from '../../atoms/Mypage/UserBtn'
import userSettingData from '../../../data/Mypage/UserSettingData'
import { FlatList } from 'react-native'

export default function userBtns() {
  return (
    <FlatList 
        data={userSettingData}
        renderItem={({ item }) => <UserBtn data={item} />}
        keyExtractor={(item) => item.id.toString()}
    />
  )
}
