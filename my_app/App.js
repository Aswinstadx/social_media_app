import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LandingPage from "./src/pages/LandingPage";
import LoginPage from "./src/pages/LoginPage";
import RegisterScreen from "./src/pages/RegisterScreen";

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn ? "Home" : "SignIn"}>
        {!loggedIn ? (
          <>
            <Stack.Screen name="SignIn">
              {(props) => <LoginPage {...props} setLoggedIn={setLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Crowdly" component={LandingPage} />
            <Stack.Screen name="Home" component={LandingPage} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={LandingPage} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
