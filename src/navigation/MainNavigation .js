import React from "react";
import { Dimensions,Text,View } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "@expo/vector-icons/Ionicons";
import Registration from "../screen/resgitration/registration";
import Login from "../screen/login/Login";
import StudentAssignment from "../screen/student/assignment/StudentAssignment";
import StudentHomeScreen from "../screen/student/homeScreen/StudentHomeScreen";
import StudentProfile from "../screen/student/profile/StudentProfile";
import ForgotPassword from "../screen/forgot/forgotPassword";
import { teacherStackProfile, teacherStackAssignment, teacherStackHome } from "./CreateStackNavigator";


const authStackNavigator = createStackNavigator(
    {
        login: {
            screen: Login
        },
        registration: {
            screen: Registration
        }
    },
    {
        defaultNavigationOptions: {
            header: false
        }
    }
);

const forgotStackNavigator = createStackNavigator(
    {
        forgot: {
            screen: ForgotPassword,
            navigationOptions: ({ navigation }) => {
                return {
                  headerTitle: "Forgote",
                  headerTitleStyle: {
                    color: "white"
                  },
                  headerStyle: {
                    borderBottomColor:0
                  },
                  headerRight: (
                    <View style={{margin:10}}>
                         <Text>Forgot</Text>
                    </View>
                  ),
                  headerLeft: (
                    <Icon
                      onPress={() => navigation.navigate('login')}
                      name="md-back"
                      color="black"
                      size={30}
                      style={{
                        paddingLeft: 10
                      }}
                    />
                  ),
                };
              }
        }
    }
);

const studentTabNavigator = createBottomTabNavigator(
    {
        studentHome: {
            screen: StudentHomeScreen
        },
        assignment: {
            screen: StudentAssignment
        },
        profile: {
            screen: StudentProfile
        },
    },
    {
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: "red",
            style: {
                backgroundColor: "blue"
            },
            indicatorStyle: {
                backgroundColor: "green"
            }
        }
    }
);

const teacherTabNavigator = createBottomTabNavigator(
    {
        home: {
            screen: teacherStackHome,
           
            
        },
        assignment: {
            screen: teacherStackAssignment
        },
        profile: {
            screen: teacherStackProfile
        },
    },
    {
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: "red",
            style: {
                backgroundColor: "blue"
            },
            indicatorStyle: {
                backgroundColor: "green"
            }
        }
    },
    {
        
    }
);

const HomeNavigator = createStackNavigator(
    {
        Teacher: {
            screen: teacherTabNavigator,
            navigationOptions: ({ navigation }) => {
                return {
                  headerTitle: "Forgote",
                  headerTitleStyle: {
                    color: "white"
                  },
                  headerStyle: {
                    borderBottomColor:0
                  },
                  headerLeft: (
                    <View style={{margin:10}}>
                         <Text>Teacher</Text>
                    </View>
                  ),
                 
                };
              }
        },
        Student:{
            screen:studentTabNavigator
        }
    },
  
);

const AppSwitchNavigator = createSwitchNavigator({
    auth: {
        screen: authStackNavigator
    },
    forgot:{
        screen:forgotStackNavigator,
        navigationOptions: {
            title: 'Welcome',
            header:false
          }
    },
    Home: {
      screen: HomeNavigator
    }
});

export default createAppContainer(AppSwitchNavigator);

