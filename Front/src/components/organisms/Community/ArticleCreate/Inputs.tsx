import React from 'react'
import TitleInput from '../../../atoms/Community/ArticleCreate/TitleInput'
import ContentInput from '../../../atoms/Community/ArticleCreate/ContentInput'
import ImagesSelectBtn from '../../../atoms/Community/ArticleCreate/ImagesSelectBtn'
import { ArticleCreateFormData } from '../../../../types/Community/ArticleCreateData'

export interface InputsProps {
  formData: ArticleCreateFormData;
  handleChange: (filed: keyof ArticleCreateFormData) => (text: string) => void;
  handleSelectImages: () => void;
}

const Inputs: React.FC<InputsProps> = ({ formData, handleChange, handleSelectImages }) => {

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
      <ImagesSelectBtn 
        handleSelectImages={handleSelectImages}
      />
    </>
  )
}

export default Inputs;