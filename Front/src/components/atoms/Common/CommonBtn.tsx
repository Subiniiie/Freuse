import React from 'react'
import { Button } from '@rneui/themed'

interface CommonBtnProps {
    title: string;
    onPress: () => void;
}

const CommonBtn:React.FC<CommonBtnProps> = ({ title, onPress }) => {


  return (
    <Button
        title={title}
        onPress={onPress}
    />
  )
}

export default CommonBtn;