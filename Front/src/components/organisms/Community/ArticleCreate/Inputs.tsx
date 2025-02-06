import React from 'react'
import TitleInput from '../../../atoms/Community/ArticleCreate/TitleInput'
import ContentInput from '../../../atoms/Community/ArticleCreate/ContentInput'
import { ArticleCreateFormData } from '../../../../types/Community/ArticleCreateData'

export interface InputsProps {
  formData: ArticleCreateFormData;
  handleChange: (filed: keyof ArticleCreateFormData) => (text: string) => void;
}

const Inputs: React.FC<InputsProps> = ({ formData, handleChange }) => {

  return (
    <>
      <TitleInput 
        onChangeText={handleChange("title")}
        value={formData.title}
      />
      <ContentInput 
        onChangeText={handleChange("content")}
        value={formData.content}
      />
      {/* 사진 올라오는 거 확인하고 PicturesInput 추가하기 */}
    </>
  )
}

export default Inputs;