import React from 'react'
import { ScrollView } from 'react-native'
import Categotries from '../../organisms/Home/Categories'
import News from '../../organisms/Home/News'
import CustomButton from '../../atoms/Home/CustomButtom'
import HomeStyles from '../../../styles/Home/HomeStyles'

export default function HomeMain() {
  return (
    <ScrollView contentContainerStyle={ HomeStyles.contentContainer }>
        <Categotries />
        <News />
        <CustomButton />
    </ScrollView>
  )
}