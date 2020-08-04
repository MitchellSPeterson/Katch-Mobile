import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment';

class HourComponents extends Component {
    constructor(props){
        super(props);
        
    }

    getTime = () => {
         var time = moment.unix(this.props.time).format('h A');
         //console.log(time);

        
        return <Text style={styles.hourText}>{time}</Text>;
    }

    getPop = () => {
        let p;
        if(this.props.pop > 0){
            p = this.props.pop * 100;
            p = Math.ceil(p/5)*5;
            return <Text style={styles.pop}>{p}%</Text>
        } else {
            return <Text style={styles.pop}></Text>
        }
    }

    render(){
        const sunny = <Image source={require('./img/sunny.png')}  style={styles.conditionImage}/>;
        const cloudy = <Image source={require('./img/cloudy.png')}  style={styles.conditionImage}/>;
        const fog = <Image source={require('./img/fog.png')}  style={styles.conditionImage}/>;
        const partlyCloudy = <Image source={require('./img/partly_cloudy.png')}  style={styles.conditionImage}/>;
        const rain = <Image source={require('./img/rain.png')}  style={styles.conditionImage}/>;
        const lightRain = <Image source={require('./img/rain_light.png')}  style={styles.conditionImage}/>;

        const snow = <Image source={require('./img/snow.png')}  style={styles.conditionImage}/>;
        const thunder = <Image source={require('./img/thunderstorms.png')}  style={styles.conditionImage}/>;

        let icon;
        if(this.props.icon === '01d' || this.props.icon === '01n') {
            icon = sunny;
        } else if (this.props.icon === '02d' || this.props.icon === '02n') {
            icon = partlyCloudy;
        } else if (this.props.icon === '03d' || this.props.icon === '03n') {
            icon = cloudy;
        } else if (this.props.icon === '04d' || this.props.icon === '04n') {
            icon = partlyCloudy;
        } else if (this.props.icon === '09d' || this.props.icon === '09n') {
            icon = lightRain;
        } else if (this.props.icon === '10d' || this.props.icon === '10n') {
            icon = rain;
        } else if (this.props.icon === '11d' || this.props.icon === '11n') {
            icon = thunder;
        } else if (this.props.icon === '13d' || this.props.icon === '13n') {
            icon = snow;
        } else if (this.props.icon === '50d' || this.props.icon === '50n') {
            icon = fog;
        }

        return(
            <View style={styles.c}>

                {this.getTime()}
                
                {icon}
                {this.getPop()}
                <Text style={styles.temp}>{this.props.temp}°</Text>

            </View>
        )
    }
}

const styles = {
   c: {
       height: 130,
       width: 75,
       marginTop: 10,
       marginBottom: 10,
       borderLeftColor: '#000',
       borderRightColor: '#000',
       borderLeftWidth: 1,
       borderRightWidth: 1,
       //borderRadius: 5,

       alignItems: 'center',

   },

   hourText: {
    paddingTop: 3,
    fontSize: 16,
   },

    conditionImage: {
        height: 45,
        width: 45,
        marginTop: 10,
        marginBottom: 5
    },

    temp: {
        fontSize: 16,
        paddingTop: 5
    },

    pop: {
        color: '#136cd1'
    }

}

export default HourComponents;