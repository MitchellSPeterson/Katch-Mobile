import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

class BaitChooserCard extends Component {
    constructor() {
        super();
        this.state = {
            baitSearch: 'Search'
        }
    }

    Search = () => {
        this.setState({
          baitSearch: 'Search'
        });
        
      }

      Tacklebox = () => {
        this.setState({
          baitSearch: 'Tacklebox'
        });
        
      }

    render(){
        return(
            <View style={styles.baitChooserCard}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Choose Bait</Text>
                            <View style={styles.buttonView}>
                                <View style={styles.buttonSection}>
                                    <TouchableOpacity style={styles.button} onPress={this.Search}>
                                        <Text>Search Bait</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.button} onPress={this.Tacklebox}>
                                        <Text>View Tacklebox</Text>
                                    </TouchableOpacity>
                                    
                                    
                                </View>
                            </View>
                            
                        </View>
                        {this.scroll()}
                        
                    </View>
        )
    }

    scroll() {
        if(this.state.baitSearch === 'Search'){
            return(
                <ScrollView>
                    <Text>Search</Text>
                </ScrollView>
            )
        } else {
            return(
                <ScrollView>
                    <Text>Tacklebox</Text>
                </ScrollView>
            )
        }
    }


}

const styles = {
    baitChooserCard: {
        width: '95%',
        height: '64%',
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,

    },

    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#D3D3D3'
    },

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 5
    },

    buttonSection: {
        flexDirection: 'row',
    },
    buttonView: {
        alignItems: 'center',
        
    },

    button: {
        width: 150,
        height: 25,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    }
}

export default BaitChooserCard;