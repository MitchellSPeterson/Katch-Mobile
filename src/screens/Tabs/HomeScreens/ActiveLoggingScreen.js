import React, {Component} from 'react';
import {SafeAreaView, Text, Button, ScrollView, View, TouchableOpacity, Modal} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getName } from "../../../api/auth-api";


import BaitChooserCard from '../../../components/HomeScreenComponents/BaitChooserCard';




class ActiveLoggingScreen extends Component {
    constructor() {
        super();
        this.state = {
            logging: true,
            depthModal: false,
            structureModal: false,
            depth: '',
            structure: '',
            startTime: '',
            time: '00:00:00',
            data: []
        }
    }

    startLogging = () => {
        
        
        this.setState({
          logging: true,
          
        });
        
      }

      stopLogging = () => {
        this.setState({
          logging: false,
          
        });
        
      }

      

    render(){
    return(
        <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
            <SafeAreaView style={styles.container}>
                <Button title="Back" onPress={() => this.props.navigation.navigate('Home')} color='#fff'/>

                <View style={styles.card}>
                    {this.cardContent()}
                </View>
                

                
            </SafeAreaView>
        </LinearGradient>
            
        );
    }

    cardContent() {
        if(this.state.logging){
            return (
                <View style={{width: '100%', alignItems: 'center'}}>
                    
                    <BaitChooserCard />

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.structDepth}>
                            <Text>Select Depth</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.structDepth}>
                            <Text>Select Structure</Text>
                        </TouchableOpacity>
                    </View>
                    

                    <TouchableOpacity style={styles.submit} >
                        <Text>Submit Catch</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.stop} onPress={this.stopLogging}>
                        <Text>Stop Logging</Text>
                    </TouchableOpacity>
                    
                </View>
                
            );

        } else {
            return(
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={this.startLogging}>
                        <View style={styles.button}>
                            <Text>Start Active Logging</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            );
        }
    }





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

    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        //borderRadius: 5,
        //marginTop: 10,
       // justifyContent: 'center',
        alignItems: 'center',
        

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        
    },

    timer: {
        fontSize: 30
    },

    btnContainer: {
        flexDirection: 'row',
        padding: '1%'
    },

    structDepth: {
        backgroundColor: '#dedede',
        height: 50,
        width: 150,
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },

    button: {
        padding: '1%',
        height: 200,
        width: 200,
        borderRadius: 400,  
        backgroundColor:'#2ff5a2',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 90
    },

    buttonView: {
        justifyContent: 'center',
        height: '100%'
    },

    dropdownContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    stop: {
        width: '90%',
        height: '10%',
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1%',
        marginBottom: '1%'
    },

    submit: {
        width: '90%',
        height: '10%',
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
       // marginTop: 20,
        marginBottom: '1%'
    }
   
    
}

export default ActiveLoggingScreen;