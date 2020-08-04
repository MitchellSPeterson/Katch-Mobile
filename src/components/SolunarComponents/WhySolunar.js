import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class WhySolunar extends Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../img/solunarTheory.jpg')}  style={styles.solunarImage}/>
                <Text>What is Solunar Theory?</Text>
                
            </View>
        )
    }
}

const styles = {
    container: {
        width: '97%',
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingTop: 5,
        marginBottom: 10,


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        alignItems: 'center'
    },

    solunarImage: {
        width: '100%',
        height: 170

    }
}

export default WhySolunar;