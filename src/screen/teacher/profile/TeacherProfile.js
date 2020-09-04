import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class TeacherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> TeacherProfile </Text>
        <TouchableOpacity onPress={()=>{


            this.props.navigation.navigate("editTeacherProfile")
        }}>
            <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
