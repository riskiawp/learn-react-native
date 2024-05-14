import {View, Text, StyleSheet, Button} from "react-native";

const SignUpScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>SignIn Screen</Text>
            <Button title="SignIn" onPress = {() => navigation.goBack('SignUpScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SignUpScreen;