import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate("addAssignment")
        }}>
            <Text>Add Assignment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
