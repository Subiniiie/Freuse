import React from 'react'
import { Button } from '@rneui/themed'
import useArticleCreate from '../../../../hooks/Community/ArticleCreate/useArticleCreate'

export default function PicturesInput() {
    const { handleSelectImages } = useArticleCreate();

    return (
        <Button 
            title={'사진'}
            onPress={() => handleSelectImages}
        />
    )
}