import { Text } from '@rneui/themed';
import React from 'react'

interface ItemDataProps {
  data: string | number;
}

export default function ItemData({ data }: ItemDataProps) {
  return (
    <Text>{data}</Text>
  )
}
