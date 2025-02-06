import React from 'react'
import CategorySelectOption from '../../../atoms/Community/ArticleCreate/CategorySelectOption'
import DetailedCategorySelectOption from '../../../atoms/Community/ArticleCreate/DetailedCategorySelectOption'
import ProductSelectOption from '../../../atoms/Community/ArticleCreate/ProductSelectOption'

export default function Options() {
  return (
    <>
        <CategorySelectOption />
        <DetailedCategorySelectOption/>
        <ProductSelectOption />
    </>
  )
}
