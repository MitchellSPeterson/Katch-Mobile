import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TimesCard extends Component {
    constructor(props){
        super(props);
        
    }

    formatTime = (time) => {

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Rating: {this.props.rating}</Text>
                <Text>Major Feeding Times</Text>
                <Text>{this.props.mj1Start} to {this.props.mj1End} </Text>
                <Text>{this.props.mj2Start} to {this.props.mj2End} </Text>
                <Text>Minor Feeding Times</Text>
                <Text>{this.props.mn1Start} to {this.props.mn1End} </Text>
                <Text>{this.props.mn2Start} to {this.props.mn2End} </Text>
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
        marginBottom: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 5,
        alignItems: 'center'
    }
}

export default TimesCard;