import React from 'react';
import { Button } from '@rneui/themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../../../navigates/AuthNavigator';
import { useNavigation } from '@react-navigation/native';

type SignUpScreenNavigationProps = StackNavigationProp<AuthParamList, "SignUp">;

type Props = {
  navigation: SignUpScreenNavigationProps;
}

export default function SignUpBtn() {
  const navigation = useNavigation<SignUpScreenNavigationProps>();

  return (
    <Button 
        title={'회원가입'}
        onPress={() => navigation.navigate("SignUp")}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
    />
  )
}
