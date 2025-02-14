import { Text, View } from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'

type SignUpInputImageProps = {
    selectProfileImage: () => void;
}

export default function SignupInputImage({ selectProfileImage }: SignUpInputImageProps) {
  return (
    <View>
      <Text>프로필 사진 등록</Text>
      <Button
        title="등록"
        onPress={selectProfileImage}
      />
    </View>
  )
}