import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
//import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "../core/utils";
import { signInUser } from "../api/auth-api";
import Toast from "../components/Toast";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
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
      <Header>Create Account</Header>

      <TextInput
        placeholder="First Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
        style={styles.inputView}
      />

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

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
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

  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: '#fff'
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
});

export default memo(RegisterScreen);
