import { Text as RNText, TextProps } from 'react-native'
import React from 'react'

interface CustomTextProps extends TextProps {
    fontStyle?: 'GmarketSansBold' | 'GmarketSansLight' | 'GmarketSansMedium' |
                'PaperlogyThin' | 'PaperlogyExtraLight' | 'PaperlogyLight' | 'PaperlogyRegular' | 'PaperlogyMedium' |
                'PaperlogySemiBold' | 'PaperlogyBold' | 'PaperlogyExtraBold' | 'PaperlogyBlack'
}

const CustomText: React.FC<CustomTextProps> = ({ fontStyle= 'GmarketSansBold', style, ...rest }) => {
    const customStyles = {
        GmarketSansBold : { fontfamily: 'GmarketSansTTFBold', color: '#000000'},
        GmarketSansLight : { fontFamily: 'GmarketSansTTFLight', color: '#000000' },
        GmarketSansMedium : { fonttFamily: 'GmarketSansTTFMedium', color: '#000000'},
        PaperlogyThin : { fontFamily: 'Paperlogy-1Thin', color: '#000000'},
        PaperlogyExtraLight : { fontFamily: 'Paperlogy-2ExtraLight', color: '#000000'},
        PaperlogyLight : { fontFamily : 'Paperlogy-3Light', color: '#000000'},
        PaperlogyRegular : { fontFamily : 'Paperlogy-4Regular', color: '#000000'},
        PaperlogyMedium : { fontFamily : 'Paperlogy-5Medium', color: '#000000'},
        PaperlogySemiBold : { fontFamily : 'Paperlogy-6SemiBold', color: '#000000'},
        PaperlogyBold : { fontFamily : 'Paperlogy-7Bold', color: '#000000'},
        PaperlogyExtraBold : { fontFamily: 'Paperlogy-8ExtraBold', color: '#000000'},
        PaperlogyBlack : { fontFamily: 'Paperlogy-9Black', color: '#000000'},
    };

    const seletedStyle = customStyles[fontStyle];

    return <RNText style={[seletedStyle, style]} {...rest}></RNText>
}

export default CustomText;