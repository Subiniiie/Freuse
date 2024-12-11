import React from 'react'
import { Card as CustomCard, Text } from '@rneui/themed'
import { NewsCardData } from '../../../types/NewsCardData'
import HomeStyles from '../../../styles/Home/HomeStyles';

type NewsCardComponentsProps = {
  data: NewsCardData;
};

const NewsCard: React.FC<NewsCardComponentsProps> = ({ data }) => {
  return (
    <CustomCard containerStyle={HomeStyles.newsCard}>
        <Text>
          {data.title}
        </Text>
    </CustomCard>
  )
}

export default NewsCard;