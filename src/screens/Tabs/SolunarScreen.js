import React, { useState, useEffect, Component }  from 'react';
import {SafeAreaView, Text, ActivityIndicator, StyleSheet, Modal, View, TouchableOpacity, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import {LineChart} from 'react-native-chart-kit';


import DayComponent from '../../components/SolunarComponents/DayComponent';
import TimesComponent from '../../components/SolunarComponents/TimesComponent';
import TimesCard from '../../components/SolunarComponents/TimesCard';
import MoonCard from '../../components/SolunarComponents/MoonCard';

const today = moment();
var day = today;
const latitudeDelta = 0.025
const longitudeDelta = 0.025

class SolunarScreen extends Component { 
  
  constructor() {
    super();
  
    this.state = {
      isLoading: true,
      isCurrentLocation: false,
      data: [],
      solunatDate: day.format('YYYYMMDD'),
      dayOfWeek: day.format('dddd'),
      dateOfWeek: day.format('LL'),
      offset: null,
      location: null,
      error: '',
      lat: null,
      lon: null,
      city: [],
      modalVisible: false,
      marker: null,
      region: {
        lattitude: null,
        longitude: null,
        lattitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
      },

      moonRise: '',
      moonZeinth: '',
      moonSet: '',
      moonPhase: '',


    };
    
  }

  
  



   nextDay = () => {
    day.add(1, 'd');
    this.setState({
      solunarDate: day.format('YYYYMMDD'),
      dayOfWeek: day.format('dddd'),
      dateOfWeek: day.format('LL'),
    });

    const url = ('https://api.solunar.org/solunar/' + this.state.lat + ',' + this.state.lon + ',' + day.format('YYYYMMDD') + ',-4');
    console.log('Next Day Pressed now ' + this.state.solunatDate);
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({data: json}))
      .catch((error) => console.error(error))
      .finally(() => this.setState({isLoading: false}));
      
  }




   prevDay = () => {
    day = day.subtract(1, 'd');
    this.setState({
      solunarDate: day.format('YYYYMMDD'),
      dayOfWeek: day.format('dddd'),
      dateOfWeek: day.format('LL')
    });
    
    const url = ('https://api.solunar.org/solunar/' + this.state.lat + ',' + this.state.lon + ',' + day.format('YYYYMMDD') + ',-4');
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({data: json}))
      .catch((error) => console.error(error))
      .finally(() => this.setState({isLoading: false}));
      console.log('')
      console.log('---------PrevDay-------[[')
      console.log(day);
      console.log(url);
       console.log(']]---------PrevDay-------')
      
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
        
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });    
  }

  getData = async (latitude, longitude) => {
    const solunarData = await fetch(`https://api.solunar.org/solunar/${latitude},${longitude},${day.format('YYYYMMDD')},-4`);
    const sData = await solunarData.json();
    console.log(sData)
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=709acb10cad785cb0769384de3c6b03f&units=imperial`);
    const data = await weather.json();

    this.setState({
      location: data.name,
      lat: latitude,
      lon: longitude,
      city: data.name,
      region: {
        lattitude: latitude,
        longitude: longitude,
        lattitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      isCurrentLocation: true,
      solunarDate: day.format('YYYYMMDD'),
      data: sData,

    });
    console.log(this.state.city)
  
  }


  




  componentDidMount() {
    
    this.getPosition()
    .then((position) => {   
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude})   
        this.getData(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ error: err.message });
      }); 

    }

    //labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM",  "4 PM", "5 PM", "6 PM",  "7 PM", "8 PM", "9 PM",  "10 PM", "11 PM" ],
            
  
  

  render(){
    const current = <FontAwesome name="location-arrow" size={20} color="#2ff5a2" />;
    let currentLocationIcon;
    if (this.state.isCurrentLocation){
      currentLocationIcon = current;
    }

    return (
      <View style={styles.background}>
        <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>

      <SafeAreaView style={styles.container}>





        <TouchableOpacity style={styles.locationHeader} >
          {currentLocationIcon}
          <Text>  </Text>

          <View style={styles.nestedLocation}>
            <Text style={styles.locationText}>{this.state.city}</Text>
          </View>
          <Text>  </Text>
          <AntDesign name="search1" size={20} color="#2ff5a2" />
        </TouchableOpacity>




        <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center'}}>

          <View style={styles.dateChanger}>
            <View style={styles.dayChangerView}>
              <TouchableOpacity style={styles.left} onPress={this.prevDay.bind(this)}><AntDesign name="left" size={40} color="white" /></TouchableOpacity>

              <DayComponent day={this.state.dayOfWeek} date={this.state.dateOfWeek} />
            
              <TouchableOpacity style={styles.right} onPress={this.nextDay.bind(this)}><AntDesign name="right" size={40} color="white" /></TouchableOpacity>

            </View>
          </View>

        <TimesCard 
          rating= {this.state.data.dayRating}
          mj1Start = {this.state.data.major1Start}
          mj1End = {this.state.data.major1Stop}
          mj2Start = {this.state.data.major2Start}
          mj2End = {this.state.data.major2Stop}
          mn1Start = {this.state.data.minor1Start}
          mn1End = {this.state.data.minor1Stop}
          mn2Start = {this.state.data.minor2Start}
          mn2End = {this.state.data.minor2Stop}
        />
        
        

        

          
        <MoonCard mPhase={this.state.data.moonPhase}/>
        </ScrollView>
          
      </SafeAreaView>
      </LinearGradient>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
    //justifyContent: 'center',
  },

  background: {
    backgroundColor: '#136cd1',
    flex: 1,
  },

  Gradient: {
    flex: 1,
    alignItems: 'center',
    width: '100%'

},

dateChanger: {
  width: '97%',
  height: 75,
  backgroundColor: '#58afe8',
  borderRadius: 5,
  paddingTop: 5,
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 2,  
  elevation: 5
},

scroll: {
  width: '100%',
  //alignItems: 'center'
},

  dayChangerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },

  locationHeader: {
    flexDirection: 'row',

  },

  nestedLocation: {
    alignItems: 'center'
  },

  locationText: {
    fontSize: 20,
    color: '#2ff5a2',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10
  },

  left: {
    paddingRight: 20,
    paddingTop: 7
  },

  right: {
    paddingLeft: 20,
    paddingTop: 7
    
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    //margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
   // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    height: '80%',
    width: '85%'

  },

  closeModal: {
    paddingLeft: 10,
    paddingTop: 10
  },

  doneModal: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    //flex: 1,
    paddingBottom: 15,
    paddingRight: 15
  },

  map: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  }




});

export default SolunarScreen;