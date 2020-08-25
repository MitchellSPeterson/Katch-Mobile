import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ActiveLoggingScreen from '../../screens/Tabs/HomeScreens/ActiveLoggingScreen'


const StartActiveLogCard = ({navigation}) => {
    
    
    return(
        <View style={styles.hourCard}>
            <Text style={styles.header}>Active Logging</Text>
            <Button title="Start Active Log" onPress={() => navigation.navigate('Active')}/>
            
            
            

        </View>
    )
    
}

const styles = {
    hourCard: {
        
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
        
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold'
    }


}

export default StartActiveLogCard;