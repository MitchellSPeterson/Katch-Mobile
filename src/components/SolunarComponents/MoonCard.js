import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MoonCard extends Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        return(
            <View style={styles.container}>
                <Text>Moon Card</Text>
                <Text>Phase: {this.props.mPhase}</Text>
                <Text>Moon Rise: {this.props.mRise}</Text>
                <Text>Moon Set: {this.props.mSet}</Text>
                <Text>Moon Set: {this.props.mHigh}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        width: '97%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingTop: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        alignItems: 'center'
    }
}

export default MoonCard;