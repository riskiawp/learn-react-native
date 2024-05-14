import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { colors } from "../theme";
import { SafeAreaView } from "react-native";

const Router = () => {
    return(
        <SafeAreaView>
        <NavigationContainer independent={true} theme={{
            colors: {
                background: colors.textColors.white
            }
        }}>
            <StackNavigator />
        </NavigationContainer>
        </SafeAreaView>

    );
}

export default Router;