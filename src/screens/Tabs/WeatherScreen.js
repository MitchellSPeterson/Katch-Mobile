import React, {Component} from 'react';
import {SafeAreaView, View, ScrollView, Text, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import moment from 'moment';
import WeatherCard from '../../components/WeatherComponents/WeatherCard';
import HourlyForecastCard from '../../components/WeatherComponents/HourlyForecastCard';
import TodaysDetails from '../../components/WeatherComponents/TodaysDetails';
import DailyForecast from '../../components/WeatherComponents/DailyForecast';



const today = moment();
var day = today;
const API_KEY = '709acb10cad785cb0769384de3c6b03f';



class WeatherScreen extends Component {

    constructor() {
        super();
      
        this.state = {
          isLoading: true,
          isCurrentLocation: false,
          currentWeatherData: [],
          solunatDate: day.format('YYYYMMDD'),
          dayOfWeek: day.format('dddd'),
          dateOfWeek: day.format('LL'),
          offset: null,
          location: null,
          error: '',
          lat: null,
          lon: null,
          city: '',
          tempature: 0,
          feelsLike: 0,
          weatherCondition: '',
          icon: '',
          sunrise: 0,
          sunset: 0,

        //Hourly --------------

          hourOneTime: 0,
          hourOneIcon: '',
          hourOneTemp: 0,
          hour1Pop: 0,

          hourTwoTime: 0,
          hourTwoIcon: '',
          hourTwoTemp: 0,
          hour2Pop: 0,

          hourThreeTime: 0,
          hourThreeIcon: '',
          hourThreeTemp: 0,
          hour3Pop: 0,

          hourFourTime: 0,
          hourFourIcon: '',
          hourFourTemp: 0,
          hour4Pop: 0,

          hourFiveTime: 0,
          hourFiveIcon: '',
          hourFiveTemp: 0,
          hour5Pop: 0,

          hourSixTime: 0,
          hourSixIcon: '',
          hourSixTemp: 0,
          hour6Pop: 0,

          hourSevenTime: 0,
          hourSevenIcon: '',
          hourSevenTemp: 0,
          hour7Pop: 0,

          hourEightTime: 0,
          hourEightIcon: '',
          hourEightTemp: 0,
          hour8Pop: 0,

          hourNineTime: 0,
          hourNineIcon: '',
          hourNineTemp: 0,
          hour9Pop: 0,

          hourTenTime: 0,
          hourTenIcon: '',
          hourTenTemp: 0,
          hour10Pop: 0,

          hourElevenTime: 0,
          hourElevenIcon: '',
          hourElevenTemp: 0,
          hour11Pop: 0,

          hourTwelveTime: 0,
          hourTwelveIcon: '',
          hourTwelveTemp: 0,
          hour12Pop: 0,

        //Daily---------

            day1Date: '',
            day1Icon: '',
            day1High: 0,
            day1Low: 0,
            day1Pop: 0,

            day2Date: '',
            day2Icon: '',
            day2High: 0,
            day2Low: 0,
            day2Pop: 0,

            day3Date: '',
            day3Icon: '',
            day3High: 0,
            day3Low: 0,
            day3Pop: 0,

            day4Date: '',
            day4Icon: '',
            day4High: 0,
            day4Low: 0,
            day4Pop: 0,

            day5Date: '',
            day5Icon: '',
            day5High: 0,
            day5Low: 0,
            day5Pop: 0,

            day6Date: '',
            day6Icon: '',
            day6High: 0,
            day6Low: 0,
            day6Pop: 0,

            day7Date: '',
            day7Icon: '',
            day7High: 0,
            day7Low: 0,
            day7Pop: 0,
         
          }
    
    
        }

        getPosition = () => {
            return new Promise(function (resolve, reject) {
                
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });    
          }

       

        getWeather = async (latitude, longitude) => { 
            const current_Weather_api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=709acb10cad785cb0769384de3c6b03f&units=imperial`);
            const data = await current_Weather_api_call.json(); 
            //console.log('**************************************************************************************************************************************');
            //console.log('**************************************************************************************************************************************')

            //console.log(data)   
            this.setState({
              lat: latitude,
              lon: longitude,
              city: data.name,
              tempature: Math.round(data.main.temp),
              feelsLike: Math.round(data.main.feels_like),
              icon: data.weather[0].icon,
              //temperature: data.current.temp,
             // weatherCondition: data.current.weather[0].description,
              //icon: data.weather[0].icon,
              sunrise: moment.unix(data.sys.sunrise).format("h:mm a"),
              sunset: moment.unix(data.sys.sunset).format("h:mm a"),
            });
            


            const one_api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
            exclude=current,minutely&appid=709acb10cad785cb0769384de3c6b03f&units=imperial`);
            const oneCalldata = await one_api_call.json(); 
            //console.log(oneCalldata.hourly);

            this.setState({
                hourOneTime: oneCalldata.hourly[0].dt,
                hourTwoTime: oneCalldata.hourly[1].dt,
                hourThreeTime: oneCalldata.hourly[2].dt,
                hourFourTime: oneCalldata.hourly[3].dt,
                hourFiveTime: oneCalldata.hourly[4].dt,
                hourSixTime: oneCalldata.hourly[5].dt,
                hourSevenTime: oneCalldata.hourly[6].dt,
                hourEightTime: oneCalldata.hourly[7].dt,
                hourNineTime: oneCalldata.hourly[8].dt,
                hourTenTime: oneCalldata.hourly[9].dt,
                hourElevenTime: oneCalldata.hourly[10].dt,
                hourTwelveTime: oneCalldata.hourly[11].dt,

                hourOneIcon: oneCalldata.hourly[0].weather[0].icon,
                hourTwoIcon: oneCalldata.hourly[1].weather[0].icon,
                hourThreeIcon: oneCalldata.hourly[2].weather[0].icon,
                hourFourIcon: oneCalldata.hourly[3].weather[0].icon,
                hourFiveIcon: oneCalldata.hourly[4].weather[0].icon,
                hourSixIcon: oneCalldata.hourly[5].weather[0].icon,
                hourSevenIcon: oneCalldata.hourly[6].weather[0].icon,
                hourEightIcon: oneCalldata.hourly[7].weather[0].icon,
                hourNineIcon: oneCalldata.hourly[8].weather[0].icon,
                hourTenIcon: oneCalldata.hourly[9].weather[0].icon,
                hourElevenIcon: oneCalldata.hourly[10].weather[0].icon,
                hourTwelveIcon: oneCalldata.hourly[11].weather[0].icon,

                hourOneTemp: Math.round(oneCalldata.hourly[0].temp),
                hourTwoTemp: Math.round(oneCalldata.hourly[1].temp),
                hourThreeTemp: Math.round(oneCalldata.hourly[2].temp),
                hourFourTemp: Math.round(oneCalldata.hourly[3].temp),
                hourFiveTemp: Math.round(oneCalldata.hourly[4].temp),
                hourSixTemp: Math.round(oneCalldata.hourly[5].temp),
                hourSevenTemp: Math.round(oneCalldata.hourly[6].temp),
                hourEightTemp: Math.round(oneCalldata.hourly[7].temp),
                hourNineTemp: Math.round(oneCalldata.hourly[8].temp),
                hourTenTemp: Math.round(oneCalldata.hourly[9].temp),
                hourElevenTemp: Math.round(oneCalldata.hourly[10].temp),
                hourTwelveTemp: Math.round(oneCalldata.hourly[11].temp),

                hour1Pop: oneCalldata.hourly[0].pop,
                hour2Pop: oneCalldata.hourly[1].pop,
                hour3Pop: oneCalldata.hourly[2].pop,
                hour4Pop: oneCalldata.hourly[3].pop,
                hour5Pop: oneCalldata.hourly[4].pop,
                hour6Pop: oneCalldata.hourly[5].pop,
                hour7Pop: oneCalldata.hourly[6].pop,
                hour8Pop: oneCalldata.hourly[7].pop,
                hour9Pop: oneCalldata.hourly[8].pop,
                hour10Pop: oneCalldata.hourly[9].pop,
                hour11Pop: oneCalldata.hourly[10].pop,
                hour12Pop: oneCalldata.hourly[11].pop,


                //day1Date: oneCalldata.daily[0].dt,
                day1Date: 'Today',
                day2Date: oneCalldata.daily[1].dt,
                day3Date: oneCalldata.daily[2].dt,
                day4Date: oneCalldata.daily[3].dt,
                day5Date: oneCalldata.daily[4].dt,
                day6Date: oneCalldata.daily[5].dt,
                day7Date: oneCalldata.daily[6].dt,

                day1High: Math.round(oneCalldata.daily[0].temp.max),
                day2High: Math.round(oneCalldata.daily[1].temp.max),
                day3High: Math.round(oneCalldata.daily[2].temp.max),
                day4High: Math.round(oneCalldata.daily[3].temp.max),
                day5High: Math.round(oneCalldata.daily[4].temp.max),
                day6High: Math.round(oneCalldata.daily[5].temp.max),
                day7High: Math.round(oneCalldata.daily[6].temp.max),

                day1Low: Math.round(oneCalldata.daily[0].temp.min),
                day2Low: Math.round(oneCalldata.daily[1].temp.min),
                day3Low: Math.round(oneCalldata.daily[2].temp.min),
                day4Low: Math.round(oneCalldata.daily[3].temp.min),
                day5Low: Math.round(oneCalldata.daily[4].temp.min),
                day6Low: Math.round(oneCalldata.daily[5].temp.min),
                day7Low: Math.round(oneCalldata.daily[6].temp.min),

                day1Icon: oneCalldata.daily[0].weather[0].icon,
                day2Icon: oneCalldata.daily[1].weather[0].icon,
                day3Icon: oneCalldata.daily[2].weather[0].icon,
                day4Icon: oneCalldata.daily[3].weather[0].icon,
                day5Icon: oneCalldata.daily[4].weather[0].icon,
                day6Icon: oneCalldata.daily[5].weather[0].icon,
                day7Icon: oneCalldata.daily[6].weather[0].icon,

                day1Pop: oneCalldata.daily[0].pop,
                day2Pop: oneCalldata.daily[1].pop,
                day3Pop: oneCalldata.daily[2].pop,
                day4Pop: oneCalldata.daily[3].pop,
                day5Pop: oneCalldata.daily[4].pop,
                day6Pop: oneCalldata.daily[5].pop,
                day7Pop: oneCalldata.daily[6].pop,



            });

            //console.log(this.state.hourTwelveIcon);

          }
        
        componentDidMount(){
            

            
            this.getPosition()
            .then((position) => {   
                this.setState({lat: position.coords.latitude, lon: position.coords.longitude})   
                this.getWeather(position.coords.latitude, position.coords.longitude)
              })
              .catch((err) => {
                this.setState({ error: err.message });
              });   


               
         
        }
    
        
    
       


    render(){
        return(
            <View style={styles.background}>
                <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
                    <SafeAreaView style={styles.container}>
                        
                        <Text style={styles.locationText}>{this.state.city}</Text>
                    <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}}>

                        <WeatherCard 
                            condition={this.state.weatherCondition} 
                            temp={this.state.tempature}
                            feelsLike={this.state.feelsLike}
                            icon = {this.state.icon}
                        />

                        <HourlyForecastCard 
                            h1T={this.state.hourOneTime} h2T={this.state.hourTwoTime} h3T={this.state.hourThreeTime} h4T={this.state.hourFourTime} h5T={this.state.hourFiveTime} h6T={this.state.hourSixTime}
                            h7T={this.state.hourSevenTime} h8T={this.state.hourEightTime} h9T={this.state.hourNineTime} h10T={this.state.hourTenTime} h11T={this.state.hourElevenTime} h12T={this.state.hourTwelveTime}

                            h1I={this.state.hourOneIcon} h2I={this.state.hourTwoIcon} h3I={this.state.hourThreeIcon} h4I={this.state.hourFourIcon} h5I={this.state.hourFiveIcon} h6I={this.state.hourSixIcon}
                            h7I={this.state.hourSevenIcon} h8I={this.state.hourEightIcon} h9I={this.state.hourNineIcon} h10I={this.state.hourTenIcon} h11I={this.state.hourElevenIcon} h12I={this.state.hourTwelveIcon}

                            h1Tm={this.state.hourOneTemp} h2Tm={this.state.hourTwoTemp} h3Tm={this.state.hourThreeTemp} h4Tm={this.state.hourFourTemp} h5Tm={this.state.hourFiveTemp} h6Tm={this.state.hourSixTemp}
                            h7Tm={this.state.hourSevenTemp} h8Tm={this.state.hourEightTemp} h9Tm={this.state.hourNineTemp} h10Tm={this.state.hourTenTemp} h11Tm={this.state.hourElevenTemp} h12Tm={this.state.hourTwelveTemp}

                            h1P={this.state.hour1Pop} h2P={this.state.hour2Pop} h3P={this.state.hour3Pop} h4P={this.state.hour4Pop} h5P={this.state.hour5Pop} h6P={this.state.hour6Pop}
                            h7P={this.state.hour7Pop} h8P={this.state.hour8Pop} h9P={this.state.hour9Pop} h10P={this.state.hour10Pop} h11P={this.state.hour11Pop} h12P={this.state.hour12Pop}
                        />

                        <TodaysDetails sunrise={this.state.sunrise} sunset={this.state.sunset}/>

                        <DailyForecast 
                            d1D={this.state.day1Date} d1H={this.state.day1High} d1L={this.state.day1Low} d1I={this.state.day1Icon} d1P={this.state.day1Pop}
                            d2D={this.state.day2Date} d2H={this.state.day2High} d2L={this.state.day2Low} d2I={this.state.day2Icon} d2P={this.state.day2Pop}
                            d3D={this.state.day3Date} d3H={this.state.day3High} d3L={this.state.day3Low} d3I={this.state.day3Icon} d3P={this.state.day3Pop}
                            d4D={this.state.day4Date} d4H={this.state.day4High} d4L={this.state.day4Low} d4I={this.state.day4Icon} d4P={this.state.day4Pop}
                            d5D={this.state.day5Date} d5H={this.state.day5High} d5L={this.state.day5Low} d5I={this.state.day5Icon} d5P={this.state.day5Pop}
                            d6D={this.state.day6Date} d6H={this.state.day6High} d6L={this.state.day6Low} d6I={this.state.day6Icon} d6P={this.state.day6Pop}
                            d7D={this.state.day7Date} d7H={this.state.day7High} d7L={this.state.day7Low} d7I={this.state.day7Icon} d7P={this.state.day7Pop}
                        />
                        
                        


                    </ScrollView>
                        

                    </SafeAreaView>




                
                </LinearGradient>
            </View>
            
        );
    }
    
}

const styles = {

//Containers
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00c247'
        //justifyContent: 'center'
    },

    container:{
        flex: 1,
        paddingTop: 10,
        width: '100%',
        alignItems: 'center'
        
    },

    Gradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%'

    },

    scroll: {
        width: '100%',
        //alignItems: 'center'
    },



//Cards


    




//Weather Card Components

    locationText: {
        color: '#fff',
        fontSize: 28
    },


//Hourly Forecast Components
   
}

export default WeatherScreen;