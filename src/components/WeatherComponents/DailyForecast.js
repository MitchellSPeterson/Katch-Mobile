import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HourComponents from './HourComponents'
import DailyComponent from './DailyComponent';

class DailyForecast extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
    return(
        <View style={styles.hourCard}>
            <Text style={styles.hourText}>Daily Forecast</Text>
            {/*<View style={styles.forecastContainer}>*/}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <DailyComponent date={this.props.d1D} high={this.props.d1H} low={this.props.d1L} pop={this.props.d1P} icon={this.props.d1I}/>
                    <DailyComponent date={this.props.d2D} high={this.props.d2H} low={this.props.d2L} pop={this.props.d2P} icon={this.props.d2I}/>
                    <DailyComponent date={this.props.d3D} high={this.props.d3H} low={this.props.d3L} pop={this.props.d3P} icon={this.props.d3I}/>
                    <DailyComponent date={this.props.d4D} high={this.props.d4H} low={this.props.d4L} pop={this.props.d4P} icon={this.props.d4I}/>
                    <DailyComponent date={this.props.d5D} high={this.props.d5H} low={this.props.d5L} pop={this.props.d5P} icon={this.props.d5I}/>
                    <DailyComponent date={this.props.d6D} high={this.props.d6H} low={this.props.d6L} pop={this.props.d6P} icon={this.props.d6I}/>
                    <DailyComponent date={this.props.d7D} high={this.props.d7H} low={this.props.d7L} pop={this.props.d7P} icon={this.props.d7I}/>
                   
                    
                    
                </ScrollView>

            {/*</View>*/}

        </View>
    )
    }
}

const styles = {
    hourCard: {
        width: '97%',
        height: 200,
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

export default DailyForecast;