import { useMemo, useState } from "react";
import useCategoryStore from "../../../store/Community/CategoryStore";

interface Item {
    labe: string;
    value: string;
}

const useProductSelectOption = () => {
    const { detailedValue, productValue, setProductValue } = useCategoryStore();
    const [ open, setOpen ] = useState<boolean>(false);

    const items = useMemo(() => {
        switch (detailedValue) {
            case "backpacks" :
                return [
                        {label: 'A010 MPA6', value: 'A010MPA6'},
                        {label: 'F155 CLAPTON', value: 'F155CLAPTON'},
                        {label: 'F201 PETE', value: 'F201PETE'},
                        {label: 'F253 KOWALSKI', value: 'F253KOWALSKI'},
                        {label: 'F49 FRINGE', value: 'F49FRINGE'},
                        {label: 'F511 SKIPPER', value: 'F511SKIPPER'},
                        {label: 'F512 VOYAGER', value: 'F512VOYAGER'},
                        {label: 'F601 MALCOLM', value: 'F601MALCOLM'},
                        {label: 'F690 COSTON', value: 'F690COSTON'},
                        {label: 'F691 GLEASON', value: 'F691GLEASON'},
                    ];
                case "messenger" :
                    return [
                        {label: 'F21 NIGHTCLUB', value: 'F21NIGHTCLUB'},
                        {label: 'F11 LASSIE', value: 'F11LASSIE'},
                        {label: 'F13 TOP CAT', value: 'F13TOPCAT'},
                        {label: 'F14 DEXTER', value: 'F14DEXTER'},
                        {label: 'F40 JAMIE', value: 'F40JAMIE'},
                        {label: 'F41 HAWAII FIVE-O', value: 'F41HAWAIIFIVE-O'},
                        {label: 'F655 DIXON', value: 'F655DIXON'},
                        {label: 'F670 WARREN', value: 'F670WARREN'},
                        {label: 'F685 HENRY', value: 'F685 HENRY'},
                    ];
                case "shopperAndTotebags" :
                    return [
                        {label: 'F52 MIAMI VICE', value: 'F52MIAMIVICE'},
                        {label: 'F202 LELAND', value: 'F202LELAND'},
                        {label: 'F203 BOB', value: 'F203BOB'},
                        {label: 'F250 SONNY', value: 'F250SONNY'},
                        {label: 'F261 MAURICE', value: 'F261MAURICE'},
                        {label: 'F262 JULIEN', value: 'F262JULIEN'},
                        {label: 'F640 ROLLIN', value: 'F640ROLLIN'},
                        {label: 'F680 ANDERSON', value: 'F680ANDERSON'},
                    ];
                case "sportsAndTravelBags" :
                    return [
                        {label: 'F35 CHEYENNE', value: 'F35CHEYENNE'},
                        {label: 'F36 WAYNE', value: 'F36 WAYNE'},
                        {label: 'F45 LOIS', value: 'F45LOIS'},
                        {label: 'F511 SKIPPER', value: 'F511SKIPPER'},
                        {label: 'F512 VOYAGER', value: 'F512 VOYAGER'},
                    ];
                case "shoulderBags" :
                    return [
                    {label: 'F271 MASIKURA', value: 'F271MASIKURA'},
                    {label: 'F553 LOU', value: 'F553LOU'},
                    {label: 'F640 ROLLIN', value: 'F640ROLLIN'},
                    ];
                case "laptopBags" :
                    return [
                        {label: 'F304 MOSS', value: 'F304MOSS'},
                        {label: 'F305 ROY', value: 'F305ROY'},
                    ];
                case "phoneCases" :
                    return [
                        {label: 'F337 ROBIN', value: 'F337ROBIN'},
                        {label: 'F338 FOX', value: 'F338FOX'},
                        {label: 'F341 CASE FOR IPHONE SE/8', value: 'F341CASEFORIPHONESE/8'},
                        {label: 'F380 JUSTIN', value: 'F380JUSTIN'},
                        {label: 'F381 NECKSTRAP', value: 'F381NECKSTRAP'},
                        {label: 'F385 CIRC-CASE IPHONE', value: 'F385CIRC-CASEIPHONE'},
                    ];
                case "laptopSleeves" :
                    return [
                        {label: 'F402 SLEEVE FOR LAPTOP 12"/13"', value: 'F402SLEEVEFORLAPTOP12"/13"'},
                        {label: 'F402 SLEEVE FOR LAPTOP 13"/14"', value: 'F402SLEEVEFORLAPTOP13"/14"'},
                        {label: 'F402 SLEEVE FOR LAPTOP 15"', value: 'F402SLEEVEFORLAPTOP15"'},
                    ];
                case "agendas&journals" :
                    return [
                        {label: 'F26 AGENDA', value: 'F26AGENDA'},
                        {label: 'F26/I AGENDA INLAY', value: 'F26/IAGENDAINLAY'},
                        {label: 'F241 SID', value: 'F241SID'},
                        {label: 'F241-R REFILL FOR SID', value: 'F241-RREFILLFORSID'},
                        {label: 'F242 STU', value: 'F242STU'},
                        {label: 'F242-R REFILL FOR STU', value: 'F242-RREFILLFORSTU'},
                    ];
                case "keyholders" :
                    return [
                        {label: 'F230 AL', value: 'F230AL'},
                        {label: 'F231 ED', value: 'F231ED'},
                        {label: 'F232 MO', value: 'F232MO'},
                        {label: 'F531 ARCHER', value: 'F531ARCHER'},
                    ];
                case "toiletryBag" :
                    return [
                        {label: 'F35 CHEYENNE', value: 'F35CHEYENNE'},
                    ];
                case "otherAccessories" :
                    return [
                        {label: 'F241-R REFILL FOR SID', value: 'F241-RREFILLFORSID'},
                        {label: 'F532 TED', value: 'F532TED'},
                        {label: 'F242-R REFILL FOR STU', value: 'F242-RREFILLFORSTU'},
                        {label: 'F240 ART', value: 'F240ART'},
                    ];
                case "pouches" :
                    return [
                        {label: 'F05 BLAIR', value: 'F05BLAIR'},
                        {label: 'F06 SERENA', value: 'F06SERENA'},
                        {label: 'F07 CHUCK', value: 'F07CHUCK'},
                        {label: 'F08 DAN', value: 'F08DAN'},
                        {label: 'F607 MARKS', value: 'F607MARKS'},
                        {label: 'F608 KNOTT', value: 'F608KNOTT'},
                    ];
                case "wallets" :
                    return [
                        {label: 'F50 E.T.', value: 'F50E.T.'},
                        {label: 'F51 DALLAS', value: 'F51DALLAS'},
                        {label: 'F54 BRANDON', value: 'F54BRANDON'},
                        {label: 'F555 CAROLINE', value: 'F555CAROLINE'},
                        {label: 'F255 PARKER', value: 'F255PARKER'},
                        {label: 'F256 BARROW', value: 'F256BARROW'},
                        {label: 'F257 SUTTON', value: 'F257SUTTON'},
                        {label: 'F280 LAZARUS', value: 'F280LAZARUS'},
                        {label: 'F281 BRANDON', value: 'F281BRANDON'},
                        {label: 'F554 MAX', value: 'F554MAX'},
                        {label: 'F258 WARLER', value: 'F258WARLER'},
                        {label: 'F705 SECRID X FREITAG', value: 'F705SECRIDXFREITAG'},
                    ];
                default :
                    return [];
        }
    }, [detailedValue]);

    return {
        open,
        productValue,
        items,
        setOpen,
        setProductValue
    }
};

export default useProductSelectOption;