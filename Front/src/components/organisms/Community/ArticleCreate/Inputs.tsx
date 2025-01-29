import React from 'react'
import TitleInput from '../../../atoms/Community/ArticleCreate/TitleInput'
import ContentInput from '../../../atoms/Community/ArticleCreate/ContentInput'
import useArticleCreate from '../../../../hooks/Community/ArticleCreate/useArticleCreate'

export default function Inputs() {
  const { formdata,handleChange } = useArticleCreate();

  return (
    <>
        <TitleInput 
          onChangeText={handleChange("title")}
          value={formdata.title}
        />
        <ContentInput 
          onChangeText={handleChange("content")}
          value={formdata.content}
        />
        {/* 사진 올라오는 거 확인하고 PicturesInput 추가하기 */}
    </>
  )
}