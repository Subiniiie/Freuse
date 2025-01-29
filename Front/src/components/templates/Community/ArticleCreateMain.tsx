import React from 'react'
import Inputs from '../../organisms/Community/ArticleCreate/Inputs'
import ArticleSubmitBtn from '../../atoms/Community/ArticleCreate/ArticleSubmitBtn'
import useArticleCreate from '../../../hooks/Community/ArticleCreate/useArticleCreate'

export default function ArticleCreateMain() {
  const { formdata, handleChange, submitArticleCreateForm } = useArticleCreate();


  return (
    <>
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