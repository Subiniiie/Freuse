import React from 'react';
import { Card as CustomCard, Text } from '@rneui/themed';
import { CardData } from '../../../types/Home/CardData';
import HomeStyles from '../../../styles/Home/HomeStyles';

type CardComponentsProps = {
    data: CardData;
};

const Card: React.FC<CardComponentsProps> = ({ data }) => {
    return (
        <CustomCard containerStyle={HomeStyles.categoryCard}>
            <Text>
                {data.name}
            </Text>
        </CustomCard>
    )
}

export default Card;