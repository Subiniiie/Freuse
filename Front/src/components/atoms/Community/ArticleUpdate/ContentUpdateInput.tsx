import React from 'react'
import { Input } from '@rneui/themed'
import useArticleItemStore from '../../../../store/Community/ArticleItemStore'

type ContentUpdateInputProps = {
    value: string;
    onChangeText: (text: string) => void;
}

const ContentUpdateInput:React.FC<ContentUpdateInputProps> = ({ value, onChangeText }) => {
  const { articleItem } = useArticleItemStore();

  return (
    <Input 
      placeholder={articleItem?.content}
      multiline={true}
      numberOfLines={20}
      value={value}
      onChangeText={onChangeText}
      inputStyle={{
        minHeight: 200, 
        textAlignVertical: 'top'
      }}
      inputContainerStyle={{
        height: 200 
      }}
    />
  )
}

export default ContentUpdateInput;