import React from 'react'
import { Button } from '@rneui/themed'
import useCommon from '../../../hooks/Common/useCommon';

interface CommonBtnProps {
    title: string;
    onPress: (title: string) => void;
}

const CommonBtn:React.FC<CommonBtnProps> = ({ title }) => {

  const { decideBtn } = useCommon();


  return (
    <Button
        title={title}
        onPress={() => decideBtn(title)}
    />
  )
}

export default CommonBtn;