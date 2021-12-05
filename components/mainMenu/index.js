import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from '../button';
import logo from '../../assets/logo.png';
import SignIn from "../sign-in";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const MainMenu = ({navigation}) => {
    return (
        <View style={styles.welcome}>
            <View style={styles.main}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.text}>
                    Running App
                </Text>
            </View>
            <View>
               <CustomButton
                    title={'Mapa'}
                    color={'secondary'} color={'tertiary'} navigation={navigation} onPress={"Mapa"}
                />
            </View>
            <View>
                <CustomButton
                    title={'Historial'}
                    color={'secondary'} color={'tertiary'} navigation={navigation} onPress={"Historial"}
                />
            </View>
            <View style={styles.marginTop}>
                <CustomButton
                    title={'Comenzar recorrido'}
                    color={'main'} style={styles.button}
                    navigation={navigation}
                    onPress={"Chron"}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#262626',
        fontSize: 25,
        textAlign: "center"
    },
    logo: {
        height: 250,
        width: 250,
    },
    main: {
        flex: 0.8,
    },
    marginTop: {
        marginTop: 10
    },
    centerButton: {
        justifyContent: "center",
        alignSelf: "center",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    chronButton: {
        marginTop: 10
    }
});

export default MainMenu;