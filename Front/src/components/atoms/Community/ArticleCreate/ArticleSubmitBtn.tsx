import React from 'react'
import { Button } from '@rneui/themed'

export interface ArticleSubmitBtnProps {
  submitArticleCreateForm: () => Promise<void>;
}

const ArticleSubmitBtn: React.FC<ArticleSubmitBtnProps> = ({ submitArticleCreateForm }) => {

  return (
    <Button 
      title='완료'
      containerStyle={{
        width: 100,
      }}
      onPress={submitArticleCreateForm}
    />
  )
}

export default ArticleSubmitBtn;