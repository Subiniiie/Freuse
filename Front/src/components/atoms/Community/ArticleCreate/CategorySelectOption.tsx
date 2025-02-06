import React from 'react'
import DropDownPicker from "react-native-dropdown-picker";
import useCategorySelectOption from '../../../../hooks/Community/ArticleCreate/useCategorySelectOption';

export default function CategorySelectOption() {

    const { open, value, items, setOpen, setValue, setItems } = useCategorySelectOption();
    return (
        <DropDownPicker 
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='카테고리를 선택하세요.'
            style={{
                width: 200,
                zIndex: 3
            }}
        />
    )
}
