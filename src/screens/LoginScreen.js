import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ImageBackground } from "react-native";

import Logo from "../components/Logo";
//import Header from "../components/Header";
import Button from "../components/Button";
//import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import { loginUser } from "../api/auth-api";
import Toast from "../components/Toast";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false); 
  };




  return (
    <View style={styles.container}>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />
      

      <Logo />

      <TextInput
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.inputView}
      />

      <TextInput
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
        style={styles.inputView}
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} loading={loading} onPress={_onLoginPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#136cd1'
  },

  forgotPassword: {
    width: "100%",
    alignItems: "center",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: '#fff',
  },
  link: {
    fontWeight: "bold",
    color: '#2ff5a2'
  },
  
  button: {
    width:"80%",
    backgroundColor:"#2ff5a2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },

  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'

  },

  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius: 25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    paddingLeft:5
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    alignItems: 'center'
  },
});

export default memo(LoginScreen);
