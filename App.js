import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Langding from "./components/auth/Langding";
import PostStory from "./components/PostStory";
import Profiles from "./components/Profile/Profiles";
import Story from "./components/Story/Story";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Tab from "./Tab";
import Profile from "./components/Profile/Profile";
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import store from "./redux/store";
import Messenger from "./components/messenger/Messenger";
import ChatNavi from "./components/messenger/ChatNavi";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTab"
            component={Tab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Story"
            component={Story}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profiles"
            component={Profiles}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Messenger"
            component={Messenger}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatNavi"
            component={ChatNavi}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
