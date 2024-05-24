import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      // Perform registration logic here
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/027/868/584/original/flat-developer-team-setup-for-user-login-app-with-mobile-concept-online-login-form-login-page-user-profile-access-to-account-concept-flat-illustration-on-a-white-background-vector.jpg",
          }}
        />
        <View style={styles.registerSection}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!confirmPasswordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Icon
                name={confirmPasswordVisible ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? (
            <Text style={styles.error}>{confirmPasswordError}</Text>
          ) : null}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollView: {
    flexGrow: 1,
  },
  registerSection: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  tinyLogo: {
    width: "100%",
    height: '40%',
    resizeMode: "contain",
    marginBottom: 20,
  },
});

export default RegisterScreen;
