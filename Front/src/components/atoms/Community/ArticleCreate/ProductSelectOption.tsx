import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import useProductSelectOption from '../../../../hooks/Community/ArticleCreate/useProductSelectOption'

export default function ProductSelectOption() {
    const { open, productValue, items, setOpen, setProductValue } = useProductSelectOption();

    return (
        <DropDownPicker 
            open={open}
            value={productValue}
            items={items}
            setOpen={setOpen}
            setValue={setProductValue}
            placeholder='상품을 선택해주세요.'
            style={{
                width: 200,
                zIndex: 1
            }}
        />
    )
}