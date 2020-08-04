import React from 'react';
import {SafeAreaView, Text, Button, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getName } from "../../api/auth-api";

import ActiveLoggingScreen from '../../components/HomeScreenComponents/StartActiveLogCard';


const HomeTab = () => {
    return(
        <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
            <SafeAreaView style={styles.container}>
                

                
            </SafeAreaView>
        </LinearGradient>
            
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
        //justifyContent: 'center'
    },

    Gradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%'

    },

    welcomeText: {
        fontSize: 30,
        color: '#2ff5a2',
        fontWeight: 'bold'
    },

    scroll: {
        width: '100%',
    },
}

export default ActiveLoggingScreen;