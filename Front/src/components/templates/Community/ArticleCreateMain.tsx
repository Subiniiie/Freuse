import React from 'react'
import Inputs from '../../organisms/Community/ArticleCreate/Inputs'
import ArticleSubmitBtn from '../../atoms/Community/ArticleCreate/ArticleSubmitBtn'
import useArticleCreate from '../../../hooks/Community/ArticleCreate/useArticleCreate'
import Options from '../../organisms/Community/ArticleCreate/Options'

export default function ArticleCreateMain() {
  const { formdata, handleChange, submitArticleCreateForm } = useArticleCreate();


  return (
    <>
      <Options />
      <Inputs 
        formData={formdata}
        handleChange={handleChange}
      />
      <ArticleSubmitBtn 
        submitArticleCreateForm={submitArticleCreateForm}
      />
    </>
  )
}