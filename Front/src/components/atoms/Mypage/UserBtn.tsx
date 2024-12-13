import React from 'react'
import { Button } from '@rneui/themed'
import { UserSettingData } from '../../../types/UserSettingData'

type UserSettingComponentsProps = {
  data: UserSettingData;
};

const UserBtn: React.FC<UserSettingComponentsProps> = ({ data }) => {
  return (
    <Button>{data.name}</Button>
  )
}

export default UserBtn;