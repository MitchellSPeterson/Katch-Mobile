import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import { getName, logoutUser } from "../../api/auth-api";


const Community = () => {
    return(
        <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Community Page</Text>
            </SafeAreaView>
        </LinearGradient>
            
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
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

    logout: {
        color: '#fff'
    }
}

export default Community;