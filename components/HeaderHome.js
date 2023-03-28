import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Logo/Instagram_logo.svg.png")}
      />
      <View style={styles.icon}>
        <TouchableOpacity>
          <Feather name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Messenger")}>
          <Ionicons
            style={{ marginLeft: 15, marginRight: 10 }}
            name="paper-plane-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  },
  logo: {
    top: 40,
    left: 10,
    height: 30,
    width: 100,
  },
  icon: {
    flexDirection: "row",
    top: 40,
  },
});
