import React from "react";
import Card from "../../atoms/Home/Card";
import cardData from "../../../data/Home/CardData";
import { FlatList } from "react-native";

const Cards = () => {
    return (
        <FlatList
            data={cardData}
            renderItem={({ item }) => <Card data={item}/>}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        >

        </FlatList>
    )
}

export default Cards;