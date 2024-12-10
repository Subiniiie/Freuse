import React from 'react'
import NewsCard from '../../atoms/Home/NewsCard'
import newsCardData from '../../../data/Home/NewsCardData'


const NewsCards = () => {
  return (
    <>
      {newsCardData.map((item) => (
        <NewsCard
          key={item.id}
          data={item} 
        />
      ))};
    </>
  )
}

export default NewsCards;