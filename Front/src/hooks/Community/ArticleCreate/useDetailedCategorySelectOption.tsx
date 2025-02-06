import { useMemo, useState } from "react";
import useCategoryStore from "../../../store/Community/CategoryStore";

interface Item {
    label: string;
    value: string;
}


const useDetailedCategorySelectOption = () => {
    const { value, detailedValue, setDetailedValue } = useCategoryStore();
    const [ open, setOpen ] = useState<boolean>(false);

    const items = useMemo(() => {
        switch (value) {
            case "bag" :
                return [
                    {label: 'backpacks', value: 'backpacks'},
                    {label: 'messenger', value: 'messenger'},
                    {label: 'shopper and totebags', value: 'shopperAndTotebags'},
                    {label: 'sports and travel bags', value: 'sportsAndTravelBags'},
                    {label: 'shoulder bags', value: 'shoulderBags'},
                    {label: 'laptop bags', value: 'laptopBags'},
                ];
            case "electronicAccessary" :
                return [
                    {label: 'phone cases', value: 'phoneCases'},
                    {label: 'laptop sleeves', value: 'laptopSleeves'},
                    {label: 'agendas&journals', value: 'agendas&journals'},
                    {label: 'keyholders', value: 'keyholders'},
                    {label: 'toiletry bag', value: 'toiletryBag'},
                    {label: 'other accessories', value: 'otherAccessories'},
                ];
            case "pouch" :
                return [
                    {label: 'pouches', value: 'pouches'}
                ];
            case "wallet" :
                return [
                    {label: 'wallets', value: 'wallets'}
                ];
            default :
            return [];
            
        }
    }, [value]);

    return {
        open,
        detailedValue,
        items,
        setOpen,
        setDetailedValue,
    }
};

export default useDetailedCategorySelectOption;