import React from 'react'
import { Text } from '@rneui/themed'
import AuthBtns from '../../molecules/Auth/AuthBtns'

const AuthMain = React.memo(() => {
  return (
    <>
        <Text h1>프리유즈</Text>
        <AuthBtns />
    </>
  );
});

export default AuthMain;