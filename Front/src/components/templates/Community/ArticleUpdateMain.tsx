import React from 'react'
import Inputs from '../../organisms/Community/ArticleUpdate/Inputs'
import useArticleUpdate from '../../../hooks/Community/ArticleUpdate/useArticleUpdate'

export default function ArticleUpdateMain() {
  const { formData, handleUpdateChange } = useArticleUpdate();


  return (
    <Inputs 
        formData={formData}
        handleUpdateChange={handleUpdateChange}
    />
  )
}
