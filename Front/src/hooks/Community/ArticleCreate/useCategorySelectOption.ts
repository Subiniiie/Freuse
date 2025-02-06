import { useState } from "react";
import useCategoryStore from "../../../store/Community/CategoryStore";


interface Item {
    label: string;
    value: string;
}

const useCategorySelectOption = () => {

    const [ open, setOpen ] = useState<boolean>(false);
    const {value, setValue } = useCategoryStore();
    const [items, setItems ] = useState<Item[]>([
        {label: '가방', value: 'bag'},
        {label: '전자 악세사리', value: 'electronicAccessary'},
        {label: '파우치', value: 'pouch'},
        {label: '지갑', value: 'wallet'}
    ]);

    return {
        open,
        value,
        items,
        setOpen,
        setValue,
        setItems
    }
};

export default useCategorySelectOption;