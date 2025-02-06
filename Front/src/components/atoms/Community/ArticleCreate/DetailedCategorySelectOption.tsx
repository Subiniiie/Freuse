import React from 'react'
import DropDownPicker from "react-native-dropdown-picker";
import useDetailedCategorySelectOption from '../../../../hooks/Community/ArticleCreate/useDetailedCategorySelectOption';

export default function DetailedCategorySelectOption() {

    const { open, detailedValue, items, setOpen, setDetailedValue } = useDetailedCategorySelectOption();
  return (
    <DropDownPicker
        open={open}
        value={detailedValue}
        items={items}
        setOpen={setOpen}
        setValue={setDetailedValue}
        placeholder='세부 카테고리를 선택하세요.'
        style={{
            width: 200,
            zIndex: 2
        }}
    />
  )
}