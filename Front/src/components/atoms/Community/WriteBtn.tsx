import React from 'react'
import { Button } from '@rneui/themed'

export default function WriteBtn() {
  return (
    <Button
        title="글쓰기"
        icon={{
        name: 'plus',
        type: 'font-awesome',
        size: 14,
        color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10, marginTop: 2 }}
        titleStyle={{ fontWeight: '600' }}
        buttonStyle={{
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        }}
        containerStyle={{
        width: 120,
        marginLeft: 280,
        marginBottom: 20,
        }}
    />
  )
}
