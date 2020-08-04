import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class WeatherCard extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const sunny = <Image source={require('../../components/WeatherComponents/img/sunny.png')}  style={styles.conditionImage}/>;
        const cloudy = <Image source={require('../../components/WeatherComponents/img/cloudy.png')}  style={styles.conditionImage}/>;
        const fog = <Image source={require('../../components/WeatherComponents/img/fog.png')}  style={styles.conditionImage}/>;
        const partlyCloudy = <Image source={require('../../components/WeatherComponents/img/partly_cloudy.png')}  style={styles.conditionImage}/>;
        const rain = <Image source={require('../../components/WeatherComponents/img/rain.png')}  style={styles.conditionImage}/>;
        const lightRain = <Image source={require('../../components/WeatherComponents/img/rain_light.png')}  style={styles.conditionImage}/>;

        const snow = <Image source={require('../../components/WeatherComponents/img/snow.png')}  style={styles.conditionImage}/>;
        const thunder = <Image source={require('../../components/WeatherComponents/img/thunderstorms.png')}  style={styles.conditionImage}/>;

        let icon;
        if(this.props.icon === '01d') {
            icon = sunny;
        } else if (this.props.icon === '02d') {
            icon = partlyCloudy;
        } else if (this.props.icon === '03d') {
            icon = cloudy;
        } else if (this.props.icon === '04d') {
            icon = partlyCloudy;
        } else if (this.props.icon === '09d') {
            icon = lightRain;
        } else if (this.props.icon === '10d') {
            icon = rain;
        } else if (this.props.icon === '11d') {
            icon = thunder;
        } else if (this.props.icon === '13d') {
            icon = snow;
        } else if (this.props.icon === '50d') {
            icon = fog;
        }



        return(
            <View style={styles.weatherCard}>
                            <View style={styles.weatherCardContent}>

                                <View style={styles.conditionContainer}>
                                    {icon}
                                    <Text style={styles.degreeText}>{this.props.temp}°</Text>
                                </View>

                                <Text style={styles.weatherText}>{this.props.condition}</Text>
                                <Text style={styles.feels}>Feels Like {this.props.feelsLike}°</Text>
                            </View>
                        </View>
        )
    }
}

const styles = {
    weatherCard: {
        width: '97%',
        height: 150,
        backgroundColor: '#58afe8',
        borderRadius: 5,
        paddingTop: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5
    },

    weatherCardContent: {
        alignItems: 'center'
    },

    conditionContainer: {
        flexDirection: 'row',
        paddingTop: 10

    },

    conditionImage: {
        height: 75,
        width: 75,
        paddingRight: 5
    },

    degreeText: {
        color: '#fff',
        fontSize: 50,
        paddingTop: 5,
        paddingLeft: 5
    },

    weatherText: {
        color: '#fff',
        fontSize: 16
    },

    feels: {
        color: '#fff',
        fontSize: 16

    },

}

export default WeatherCard;