import React, {Component} from 'react';
import {SafeAreaView, Text, Button, ScrollView, View, TouchableOpacity, TextInput, Modal} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {getTacklebox} from '../../../api/auth-api';
import DropDownPicker from 'react-native-dropdown-picker';


class Tacklebox extends Component {
    constructor() {
        super();
        this.state = {
            typeOfLure: "",
            
            lureModalVis: false
        }
    }

    render(){
        


        return(
            


            <LinearGradient colors={['#136cd1', '#2ff5a2']} style={styles.Gradient}>
            <SafeAreaView style={styles.container}>

            <Modal
               animationType="slide"
                transparent={true}
                visible={this.state.lureModalVis}
                
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Select Lure Type</Text>


                    <View style={styles.lureRow1}>
                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Soft Plastics"})}}
                        >
                            <Text style={styles.buttonText}>Soft Plastics</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Hard Baits"})}}
                        >
                            <Text style={styles.buttonText}>Hard Baits</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.lureRow1}>
                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Jigs"})}}
                        >
                            <Text style={styles.buttonText}>Jigs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Swimbaits"})}}
                        >
                            <Text style={styles.buttonText}>Swimbaits</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.lureRow1}>
                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Spinnerbaits"})}}
                        >
                            <Text style={styles.buttonText}>Spinnerbaits</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {this.setState({typeOfLure: "Buzz Baits"})}}
                        >
                            <Text style={styles.buttonText}>Buzz Baits</Text>
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity
                    style={styles.chooseBtn}
                    onPress={() => {this.setState({lureModalVis: false})}}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>





                <Button title="Back" onPress={() => this.props.navigation.navigate('Home')} color='#fff'/>

                <View style={styles.card}>
                    <Text>Tacklebox</Text>
                    <Text>Add Lure to Tacklebox</Text>

                    <TouchableOpacity onPress={() => {this.setState({lureModalVis: true})}} style={styles.chooseBtn}>
                        <Text style={styles.buttonText}>Chose Lure Type</Text>
                    </TouchableOpacity>
                    
                    
                    
                    
                    
                    
                </View>
                

                
            </SafeAreaView>
        </LinearGradient>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
        
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
        alignItems: 'center',
        

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        
    },

    drop: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        height: 200
    },

    optionText: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingRight: 20,
        paddingTop: 5
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 22
      },
      modalView: {
        //margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        //padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

      chooseBtn: {
          backgroundColor: '#D3D3D3',
          height: 30,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          margin: 10
      },
      buttonText: {
        padding: 5
      },

      lureRow1: {
          flexDirection: 'row',
          padding: 20
      }
        
      
}

export default Tacklebox;