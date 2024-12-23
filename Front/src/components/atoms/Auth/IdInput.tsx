import React from 'react'
import { Input } from '@rneui/themed'

export default function IdInput() {
    const input = React.createRef();

    return (
    <Input
        placeholder='아이디'
    />
    )
}