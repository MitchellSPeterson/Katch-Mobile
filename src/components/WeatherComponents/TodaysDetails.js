import React, {Component} from 'react';
import {View, Text, Image, } from 'react-native';


class TodaysDetails extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
    return(
        <View style={styles.hourCard}>
            <Text style={styles.hourText}>Todays Details</Text>
            <View style={styles.container}>
                <View style={styles.setRise}>
                    <View style={styles.sunrise}>
                        <Text>Sunrise:</Text>
                        <Text>{this.props.sunrise}</Text>
                    </View>

                    <View style={styles.sunset}>
                        <Text>Sunset:</Text>
                        <Text>{this.props.sunset}</Text>
                    </View>
                </View>

                

            </View>

            <View style={styles.wind}>
                    <Text>Wind: </Text>
                    <Text>N 5 mph</Text>
                </View>

            <View style={styles.pressure}>
                    <Text>Barometric Pressure: </Text>
                    <Text>29.43 inHg</Text>
            </View>
            
            

        </View>
    )
    }
}

const styles = {
    hourCard: {
        width: '97%',
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        
    },

    container: {
        alignItems: 'center'
    },

    setRise: {
        flexDirection: 'row',
        
        marginTop: 10
    },

    sunrise: {
        marginRight: 40
    },
    sunset: {
        marginLeft: 40
    },

    wind: {
        flexDirection: 'row',
        marginTop: 10,
    },

    pressure: {
        flexDirection: 'row',
        marginTop: 10,
    },


    hourText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
}

export default TodaysDetails;