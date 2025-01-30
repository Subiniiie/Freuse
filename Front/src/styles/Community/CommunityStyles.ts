import { StyleSheet } from "react-native";

const CommunityStyles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        padding: 5,
    },
    communityBarContainer: {
        flexDirection: 'row',
    },
    filterBtn: {
        width: 30,
        height: 45,
        resizeMode: 'contain',
    },
    articleListContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',

    },
    articleUserInfoContainer: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 8
    },
})


export default CommunityStyles;