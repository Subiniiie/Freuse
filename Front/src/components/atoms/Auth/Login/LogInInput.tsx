import React from 'react'
import { Input } from '@rneui/themed'
import { LogInData } from '../../../../types/Auth/LogInData'

type LogInComponentsProps = {
    data: LogInData;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean; 
};

const LogInInput: React.FC<LogInComponentsProps> = ({ data, value, onChangeText, secureTextEntry }) => {
    return (
        <Input 
            placeholder={data.title}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default LogInInput;