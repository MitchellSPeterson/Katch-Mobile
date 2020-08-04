import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TimesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        console.log('******Time Two: ' + this.props.day);
    }

    componentDidMount() {
        const url = ('https://api.solunar.org/solunar/' + '42.66,-84.07,' + this.props.day + ',-4');
        fetch(url)
          .then((response) => response.json())
          .then((json) => this.setState({data: json}))
          .catch((error) => console.error(error));
          
      }

    render(){
        return(
            <View>
                <Text style={styles.head}>Time Component Two</Text>
                <Text>Day Rating: {this.state.data.rating}</Text>
                <Text>Major Feeding Times</Text>
                <Text>{this.state.data.mj1Start} to {this.state.data.mj1End} </Text>
                <Text>{this.state.data.mj2Start} to {this.state.data.mj2End} </Text>
                <Text>Minor Feeding Times</Text>
                <Text>{this.state.data.mn1Start} to {this.state.data.mn1End} </Text>
                <Text>{this.state.data.mn2Start} to {this.state.data.mn2End} </Text>

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

    head: {
        color: '#2ff5a2',
        fontSize: 18
    }

}
export default TimesComponent;

