import React from 'react';
import {View, Text} from 'react-native';

const DayComponent = (props) => {
    return(
        <View>
            <Text style={styles.dayText}>{props.day}</Text>
            <Text style={styles.dateText}>{props.date}</Text>
        </View>
    );
}

const styles = {
    container:{
        width: '90%',
        height: '10%',
        alignItems: 'center',
        

    },

    locationText: {
        fontSize: 20,
        color: '#2ff5a2',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10
    },

    dayText:{
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },

    dateText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }
}
export default DayComponent;