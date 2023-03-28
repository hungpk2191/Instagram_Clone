import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Box_mess = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity activeOpacity={0.5} style={styles.Image_Cover}>
          <Image
            source={{
              uri: data.Avata,
            }}
            style={styles.ava}
          />
        </TouchableOpacity>
        <View style={styles.MainMess}>
          <Text style={styles.NamePerson}>{data.Name}</Text>
          <View>
            <Text style={styles.TitleMess}>{data.ContentMess}</Text>
            <Text style={styles.stateMess}>• now</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Feather name="camera" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};
export default Box_mess;
const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.09,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    marginTop: 10,
    // marginBottom: 5,
  },
  ava: {
    height: height * 0.075,
    width: height * 0.075,
    borderRadius: (height * 0.075) / 2,
  },
  Image_Cover: {
    height: height * 0.085,
    width: height * 0.085,
    borderRadius: (height * 0.085) / 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
  },
  MainMess: {
    marginLeft: 10,
    justifyContent: "center",
    width: width * 0.55,
    // backgroundColor: "red",
  },
  main: { flexDirection: "row" },
  NamePerson: {
    fontSize: 13,
    fontWeight: "700",
  },
  TitleMess: {
    fontSize: 13,
    color: "gray",
  },
  stateMess: {
    position: "absolute",
    right: 0,
    fontSize: 13,
    color: "gray",
  },
});
