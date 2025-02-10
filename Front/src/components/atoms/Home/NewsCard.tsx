import React from 'react'
import { Card as CustomCard, Text } from '@rneui/themed'
import { NewsCardData } from '../../../types/Home/NewsCardData'
import HomeStyles from '../../../styles/Home/HomeStyles';
import { ImageBackground } from 'react-native';

type NewsCardComponentsProps = {
  data: NewsCardData;
};

const NewsCard: React.FC<NewsCardComponentsProps> = ({ data }) => {
  return (
    <CustomCard containerStyle={HomeStyles.newsCard}>
      <ImageBackground
        source={{ uri: data.url }}
        style={HomeStyles.CategoryCardBackImage}
        resizeMode='cover'
      >
        <Text>
          {data.title}
        </Text>
      </ImageBackground>
    </CustomCard>
  )
}

export default NewsCard;