import { StyleSheet } from "react-native";
import CustomButton from "../../components/atoms/Home/CustomButtom";

const HomeStyles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        padding: 5,
    },
    categoryCard: {
        width: 175,
        height: 165,
    },
    newsCard: {
        height: 130,
    },
    CustomButtonContainer: {
        width: 375,
        marginVertical: 10,
        marginHorizontal: 13, 
    },
});

export default HomeStyles;