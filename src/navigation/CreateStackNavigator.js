import { createStackNavigator } from "react-navigation-stack";
import TeacherProfile from "../screen/teacher/profile/TeacherProfile";
import HomeScreen from "../screen/teacher/homeScreen.js/HomeScreen";
import Assignment from "../screen/teacher/assignment/Assignment";
import AddAssignment from "../screen/teacher/assignment/AddAssignment";
import EditTeacherProfile from "../screen/teacher/profile/EditTeacherProfile";
import Icon from "@expo/vector-icons/Ionicons";
export const teacherStackProfile=createStackNavigator(
    {
        teacherProfile: {
            screen: TeacherProfile,
            
        },
        editTeacherProfile: {
            screen: EditTeacherProfile
        },
    },
    {
        defaultNavigationOptions: {
            header: null,
            
        }
    }
);
export const teacherStackHome=createStackNavigator(
    {
        teacherHome: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => {
                return {
                  headerTitle: "Dress",
                  headerTitleStyle: {
                    color: "white"
                  },
                  headerStyle: {
                    borderBottomColor:0
                  },
                 
                };
              }
        }
    },
    {
        defaultNavigationOptions: {
            header: null,
        }
    }
);
export const teacherStackAssignment=createStackNavigator(
    {
        assignment: {
            screen: Assignment,
        }
    },
    {
        addAssignment: {
            screen: AddAssignment
        }
    },
    {
        defaultNavigationOptions: {
            header: null,
        }
    }
);
