import React from 'react'
import { Button } from '@rneui/themed'
import { UserArticleData } from '../../../types/Home/UserArticleData'

type UserArticleComponentsProps = {
    data: UserArticleData;
};

const ArticleBtn: React.FC<UserArticleComponentsProps> = ({ data }) => {
  return (
    <Button>{data.name}</Button>
  )
}

export default ArticleBtn;
