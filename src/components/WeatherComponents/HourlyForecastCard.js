import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HourComponents from './HourComponents'

class HourlyForecastCard extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
    return(
        <View style={styles.hourCard}>
            <Text style={styles.hourText}>Hourly Forecast</Text>
            {/*<View style={styles.forecastContainer}>*/}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    
                    <HourComponents time={this.props.h1T} icon={this.props.h1I} temp={this.props.h1Tm} pop={this.props.h1P}/>
                    <HourComponents time={this.props.h2T} icon={this.props.h2I} temp={this.props.h2Tm} pop={this.props.h2P}/>
                    <HourComponents time={this.props.h3T} icon={this.props.h3I} temp={this.props.h3Tm} pop={this.props.h3P}/>
                    <HourComponents time={this.props.h4T} icon={this.props.h4I} temp={this.props.h4Tm} pop={this.props.h4P}/>
                    <HourComponents time={this.props.h5T} icon={this.props.h5I} temp={this.props.h5Tm} pop={this.props.h5P}/>
                    <HourComponents time={this.props.h6T} icon={this.props.h6I} temp={this.props.h6Tm} pop={this.props.h6P}/>
                    <HourComponents time={this.props.h7T} icon={this.props.h7I} temp={this.props.h7Tm} pop={this.props.h7P}/>
                    <HourComponents time={this.props.h8T} icon={this.props.h8I} temp={this.props.h8Tm} pop={this.props.h8P}/>
                    <HourComponents time={this.props.h9T} icon={this.props.h9I} temp={this.props.h9Tm} pop={this.props.h9P}/>
                    <HourComponents time={this.props.h10T} icon={this.props.h10I} temp={this.props.h10Tm} pop={this.props.h10P}/>
                    <HourComponents time={this.props.h11T} icon={this.props.h11I} temp={this.props.h11Tm} pop={this.props.h11P}/>
                    <HourComponents time={this.props.h12T} icon={this.props.h12I} temp={this.props.h12Tm} pop={this.props.h12P}/>
                    
                    
                </ScrollView>

            {/*</View>*/}

        </View>
    )
    }
}

const styles = {
    hourCard: {
        width: '97%',
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        
    },

    hourlyForecastContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
    },

    hourText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
}

export default HourlyForecastCard;