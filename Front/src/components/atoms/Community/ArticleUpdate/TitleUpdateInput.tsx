import React from 'react'
import { Input } from '@rneui/themed'
import useArticleItemStore from '../../../../store/Community/ArticleItemStore'

type TitleUpdateInputProps = {
    value: string;
    onChangeText: (text: string) => void;
}

const TitleUpdateInput:React.FC<TitleUpdateInputProps> = ({ value, onChangeText }) => {
  const { articleItem } = useArticleItemStore();

  return (
    <Input 
      placeholder={articleItem?.title}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default TitleUpdateInput;