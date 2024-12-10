import React from 'react'
import { Card as CustomCard, Text } from '@rneui/themed'
import { NewsCardData } from '../../../types/NewsCardData'

type NewsCardComponentsProps = {
  data: NewsCardData;
};

const NewsCard: React.FC<NewsCardComponentsProps> = ({ data }) => {
  return (
    <CustomCard>
        <Text>
          {data.title}
        </Text>
    </CustomCard>
  )
}

export default NewsCard;