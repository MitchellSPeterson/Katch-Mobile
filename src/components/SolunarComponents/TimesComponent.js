import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TimesComponent extends Component {
    
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <View>
                <Text>Day Rating: {this.props.rating}</Text>
                <Text>Major Feeding Times</Text>
                <Text>{this.props.mj1Start} to {this.props.mj1End} </Text>
                <Text>{this.props.mj2Start} to {this.props.mj2End} </Text>
                <Text>Minor Feeding Times</Text>
                <Text>{this.props.mn1Start} to {this.props.mn1End} </Text>
                <Text>{this.props.mn2Start} to {this.props.mn2End} </Text>
            </View>
        );
    }
}

const styles = {
    container:{
        width: '90%',
        height: '10%',
        alignItems: 'center',
        

    },

}
export default TimesComponent;

