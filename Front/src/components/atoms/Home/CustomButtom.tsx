import React from 'react'
import { Button, Text } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import useMain from '../../../hooks/Home/useMain';
import HomeStyles from '../../../styles/Home/HomeStyles';

const CustomButton = () => {
  const { openFreitagWebsite } = useMain();
  return (
    <Button
        containerStyle={HomeStyles.CustomButtonContainer}
        ViewComponent={LinearGradient}
        linearGradientProps={{
            colors: ["#FF9800", "#F44336"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5}
        }}
        onPress={openFreitagWebsite}
    >
      <Text>프라이탁 홈페이지 바로 가기</Text>
    </Button>

  )
}

export default CustomButton;