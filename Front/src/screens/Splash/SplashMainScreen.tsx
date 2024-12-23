import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Splash: undefined;
    Main: undefined;
};

export default function SplashMainScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            // 로그인 및 회원가입 메인 화면으로 바꾸기
            navigation.replace('Main');
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Text>스플래시 화면</Text>        
        </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})