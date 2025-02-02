import React from 'react'
import TitleUpdateInput from '../../../atoms/Community/ArticleUpdate/TitleUpdateInput'
import ContentUpdateInput from '../../../atoms/Community/ArticleUpdate/ContentUpdateInput'
import { ArticleUpdateFormData } from '../../../../types/Community/ArticleUpdateData'

export interface InputsProps {
    formData: ArticleUpdateFormData;
    handleUpdateChange: (field: keyof ArticleUpdateFormData) => (text: string) => void;
}

const Inputs: React.FC<InputsProps> = ({ formData, handleUpdateChange }) => {

  return (
    <>
        <TitleUpdateInput
            onChangeText={handleUpdateChange("title")}
            value={formData.title}
        />
        <ContentUpdateInput 
            onChangeText={handleUpdateChange("content")}
            value={formData.content}
        />
    </>
  )
}

export default Inputs;