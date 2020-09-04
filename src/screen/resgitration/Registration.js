import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: '',
      Lname: '',
      email: '',
      password: '',
      address: ''
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}

  onClickListener = viewId => {
    this.props.navigation.navigate('login')
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUo23uo3SCdezNgiBbLsQD4jm5SFpU1OTbn4FWnn6BL5bremj&s'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder='First name'
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            onChangeText={Fname => this.setState({ Fname })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUo23uo3SCdezNgiBbLsQD4jm5SFpU1OTbn4FWnn6BL5bremj&s'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder='Last Name'
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            onChangeText={Lname => this.setState({ Lname })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28eWTGoywITCbW6lnYDxrnNc20raHZgng0z27nWWVIE6xBZHX7g&s'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder='Email'
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://c7.uihere.com/icons/1013/803/647/modify-password-d7ce62cbd153c3060c702b6a91523dd5.png'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder='Password'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder='Address'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={address => this.setState({ address })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('login')}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('Login')}
        >
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'red'
  },
  loginButton: {
    backgroundColor: '#00b5ec'
  },
  loginText: {
    color: 'white'
  }
});
