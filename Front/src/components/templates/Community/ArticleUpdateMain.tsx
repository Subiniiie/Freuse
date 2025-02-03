import React from 'react'
import Inputs from '../../organisms/Community/ArticleUpdate/Inputs'
import useArticleUpdate from '../../../hooks/Community/ArticleUpdate/useArticleUpdate'
import CommonBtn from '../../../components/atoms/Common/CommonBtn'

export default function ArticleUpdateMain() {
  const { formData, handleUpdateChange, submitArticleUpdateForm } = useArticleUpdate();


  return (
    <>
      <Inputs 
          formData={formData}
          handleUpdateChange={handleUpdateChange}
      />
      <CommonBtn 
        title='수정 완료'
        onPress={submitArticleUpdateForm}
      />
    </>
  )
}
