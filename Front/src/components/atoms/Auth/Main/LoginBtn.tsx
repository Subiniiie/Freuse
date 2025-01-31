import React from 'react';
import { Button } from '@rneui/themed';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../../../navigates/AuthNavigator';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigationProps = StackNavigationProp<AuthParamList, "Login">;

export default function LoginBtn() {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  return (
    <Button 
        title={'로그인'}
        onPress={() => navigation.navigate("Login")}
        containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
    />
  )
}
