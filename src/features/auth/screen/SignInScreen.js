import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import {colors, sizes} from '../../../theme'
import { useNavigation } from "expo-router";
import React, { useState } from 'react';

const SignInScreen = () => {
    const navigation = () => useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SignIn Screen</Text>
            <View style={styles.line}/>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail()}
                placeholder='email' style={{
                    height: 56,
                    width: '100%',
                    marginBottom: sizes.xl8,
                    paddingHorizontal: sizes.large,
                    paddingVertical: sizes.xl,
                    backgroundColor: colors.textColors.whiteGrey,
                    borderRadius: sizes.medium,
                    fontWeight: '600'
                }}/>
            <Button title="SignUp" onPress={() => navigation.navigate('SignUpScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: sizes.xl4
    },
    title:{
        color: colors.textColors.black,
        fontWeight: '800',
        fontSize: sizes.xl
    },
    line:{
        width: 87,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.primary.blue,
        marginTop: sizes.xl2,
        marginBottom: 48,
    }
});

export default SignInScreen;