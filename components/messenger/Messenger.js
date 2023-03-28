import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Box_mess from "./Box_mess";
const Messenger = () => {
  const navigation = useNavigation();
  const data = [
    {
      Avata: "https://diendanlequydon.com/downloads/image_prv/102/101432.jpg",
      Name: "karelian",
      ContentMess: "Nahh",
    },
    {
      Avata:
        "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avata-chu-meo-buon-de-thuong.jpg",
      Name: "daisy",
      ContentMess: "Meow",
    },
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("MyTab")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.Name}>NgoxHone </Text>
          <AntDesign name="down" size={14} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Search" style={styles.Input}>
        {/* <AntDesign name="search1" size={20} color="gray" /> */}
      </TextInput>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("ChatNavi",{data:data[0]})}
        >
          <Box_mess data={data[0]} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("ChatNavi",{data:data[1]})}
        >
          <Box_mess data={data[1]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  Input: {
    width: width * 0.9,
    backgroundColor: "#efeff0",
    borderRadius: 10,
    height: 36,
    paddingHorizontal: 10,
  },
  header: {
    marginTop: height * 0.05,
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    width,
    alignItems: "center",
    // backgroundColor: "red",
  },
  Name: {
    fontWeight: "700",
  },
});
