import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const Router = () => {
    return(
        <NavigationContainer independent={true}>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Router;