import React from 'react'
import { Button } from '@rneui/themed'

export interface ImagesSelectBtnProps {
  handleSelectImages: () => void;
}

const ImagesSelectBtn: React.FC<ImagesSelectBtnProps> = ({ handleSelectImages }) => {
  return (
    <Button 
        title="사진 등록"
        onPress={handleSelectImages}
    />
  )
}

export default ImagesSelectBtn;