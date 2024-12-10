import { View, Text } from 'react-native';
import React from 'react';
import NewsCards from '../../molecules/Home/NewsCards';
import CustomText from '../../../styles/fonts/CustomText';

const News = () => {
  return (
    <>
        <CustomText 
            fontStyle="PaperlogyExtraBold" 
            style={{ fontSize: 30 }}
        >
            ABOUT FREITAG
        </CustomText>
        <NewsCards />
    </>
  )
}

export default News;