import React from 'react';
import { ImageBackground, TouchableOpacity} from 'react-native';
import { Card as CustomCard, Text } from '@rneui/themed';
import { CardData } from '../../../types/Home/CardData';
import HomeStyles from '../../../styles/Home/HomeStyles';
import useMain from '../../../hooks/Home/useMain';


type CardComponentsProps = {
    data: CardData;
};

const imageMap: { [key: string]: any } = {
    bags: require('../../../public/images/Home/Categories/bags.jpg'),
    electronicAccessories: require('../../../public/images/Home/Categories/electronicAccessories.jpg'),
    pouches: require('../../../public/images/Home/Categories/pouches.jpg'),
    wallets: require('../../../public/images/Home/Categories/wallets.jpg'),
};

const Card: React.FC<CardComponentsProps> = ({ data }) => {

    const { goSeveralCategory } = useMain();
    const imageSource = imageMap[data.imageUrl] || require('../../../public/images/Home/Categories/bags.jpg')

    return (
        <TouchableOpacity onPress={() => goSeveralCategory(data.id)}>
            <CustomCard containerStyle={HomeStyles.categoryCard}>
                <ImageBackground
                    source={imageSource}
                    style={HomeStyles.CategoryCardBackImage}
                    imageStyle={{ resizeMode: 'cover' }}
                >
                    <Text>
                        {data.name}
                    </Text>
                </ImageBackground>
            </CustomCard>
        </TouchableOpacity>
    )
}

export default Card;