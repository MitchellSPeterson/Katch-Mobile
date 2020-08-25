import React from 'react';
import {SafeAreaView, Text, Button, ScrollView, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getName } from "../../../api/auth-api";


import StartActiveLogCard from '../../../components/HomeScreenComponents/StartActiveLogCard';
import ActiveLoggingScreen from './ActiveLoggingScreen';


const HomeTab = ({navigation}) => {
    return(
        <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Welcome {getName()}!</Text>
                <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}}>
                    
                    <View style={styles.activeCard}>
                        <Text style={styles.header}>Active Logging</Text>
                        <Button title="Start Active Log" onPress={() => navigation.navigate('Active')}/>
                    </View>

                    <View style={styles.activeCard}>
                        <Text style={styles.header}>View TackleBox</Text>
                        <Button title="View Tacklebox" onPress={() => navigation.navigate('Tacklebox')}/>
                    </View>

                </ScrollView>
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

    activeCard: {
        width: '97%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        alignItems: 'center'
    }
}

export default HomeTab;