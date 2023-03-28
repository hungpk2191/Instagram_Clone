import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import React from "react";
import firebase from "firebase/compat";
import { useRoute } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const ChatNavi = () => {
  const navigation = useNavigation()
  const mess = useFetchData("Mess");
  // console.log(mess[0].Date.toDate());
  const data = useRoute().params.data;
  const [input, setInput] = useState("");
  const onsubmit = async () => {
    await firebase.firestore().collection("Mess").doc().set({
      content: input,
      UserName: "us3",
      Date: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Messenger")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: width * 0.35,
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{ height: 32, width: 32, borderRadius: 16, marginRight: 10 }}
            source={{ uri: data.Avata }}
          />
          <View>
            <Text style={styles.Name}>{data.Name} </Text>
            <Text style={styles.state}>active</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginRight: 25 }}
            onPress={() => navigation.navigate("MyTab")}
          >
            <Feather name="phone" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyTab")}>
            <Feather name="video" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Info}>
        <Image
          style={{
            height: height * 0.16,
            width: height * 0.16,
            borderRadius: (height * 0.16) / 2,
            marginVertical: 10,
          }}
          source={{ uri: data.Avata }}
        />
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}>
          {data.Name}
        </Text>
        <Text style={{ color: "gray" }}>2,2K người theo dõi • 91 bài viết</Text>
      </View>
      <View style={styles.input}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: height * 0.05,
              width: height * 0.05,
              borderRadius: 100,
              backgroundColor: "#2cb6f4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="camera" size={24} color="white" />
          </View>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={(e) => setInput(e)}
            placeholder="Nhắn tin..."
            value={input}
            style={{ marginLeft: 10 }}
          />
        </View>
        {!input ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: width * 0.3,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity>
              <Feather name="mic" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="image" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="smileo" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={{ alignSelf: "center", marginRight: 10 }}
            onPress={onsubmit}
          >
            <Text style={{ color: "#2cb6f4", fontWeight: "700", fontSize: 18 }}>
              Gửi
            </Text>
          </TouchableOpacity>
        )}
        {/* <AntDesign name="search1" size={20} color="gray" /> */}
      </View>
      <View>
        {mess.map((text, index) => (
          <View key={index}>
            <Text>{text.content}</Text>
            {/* {text.Date.map((item, index) => (
              <View key={index}>
                <Text>{item.Date}</Text>
                <Text>{item.Time}</Text>
              </View>
            ))} */}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ChatNavi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height * 0.05,
    alignItems: "center",
  },
  header: {
    height: height * 0.05,
    width,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    alignItems: "center",
  },
  Name: { fontSize: 16, fontWeight: "700" },
  Input: {
    // backgroundColor: "#efeff0",
  },
  input: {
    position: "absolute",
    bottom: height * 0.03,
    width: width * 0.9,
    height: height * 0.065,
    borderWidth: 1.5,
    paddingHorizontal: 5,
    borderRadius: width,
    borderColor: "gray",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  Info: {
    marginTop: height * 0.03,
    height: height * 0.4,
    // backgroundColor: "red",
    alignItems: "center",
  },
  state: {
    color: "gray",
  },
});
