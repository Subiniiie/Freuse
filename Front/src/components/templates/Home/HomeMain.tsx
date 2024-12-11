import React from 'react'
import { ScrollView } from 'react-native'
import Categotries from '../../organisms/Home/Categories'
import News from '../../organisms/Home/News'
import CustomButton from '../../atoms/Home/CustomButtom'

export default function HomeMain() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <Categotries />
        <News />
        <CustomButton />
    </ScrollView>
  )
}