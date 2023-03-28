import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Langding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Langding</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("MyTab")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Langding;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: "15%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "orange",
    height: 60,
    width: 200,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
