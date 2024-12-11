import React from "react";
import CustomText from "../../../styles/fonts/CustomText";
import Cards from "../../molecules/Home/Cards";

const Categotries = () => {
    return (
        <>
            <CustomText fontStyle="PaperlogyExtraBold" style={{ fontSize: 30 }}>카테고리</CustomText>
            <Cards />
        </>
    )
}

export default Categotries;