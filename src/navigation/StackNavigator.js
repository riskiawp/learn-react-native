import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../features/auth";
import SignUpScreen from "../features/auth/screen/SignUpScreen";
import { DashboardScreen } from "../features/main";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignInScreen">
            <Stack.Screen name = 'SignInScreen' component={SignInScreen}/>
            <Stack.Screen name = 'SignUpScreen' component={SignUpScreen}/>
            <Stack.Screen name = 'DashboardScreen' component={DashboardScreen}/>
        </Stack.Navigator>
    );
}
export default StackNavigator;