import React from 'react'
import { Button } from '@rneui/themed'
import { UserSettingData } from '../../../types/Auth/UserSettingData'
import useUser from '../../../hooks/Mypage/useUser';

type UserSettingComponentsProps = {
  data: UserSettingData;
};

const UserBtn: React.FC<UserSettingComponentsProps> = ({ data }) => {
  const { handlePress } = useUser();

  return (
    <Button
      onPress={() => handlePress(data.name)}
    >
      {data.name}
    </Button>
  )
}

export default UserBtn;