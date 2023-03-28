import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { db } from "../../config";
import React, { useState, useEffect } from "react";
import DATA from "../../data";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const Index = (data) => {
  const navigation = useNavigation();
  const [listUser, setListUser] = useState([DATA[1]]);
  const [type, setType] = useState([DATA[0]]);
  useEffect(() => {
    db.collection("User").onSnapshot((SnapShot) => {
      setListUser(
        SnapShot.docs
          .map((doc) => doc.data())
          .filter((item) => item.Id == data.data.ID_US)
      );
    });
    db.collection("TypeNotification").onSnapshot((SnapShot) => {
      setType(
        SnapShot.docs
          .map((doc) => doc.data())
          .filter((item) => item.ID_Type == data.data.Type)
      );
    });
    // db.collection("NewFeed")
    //   .where("ID_Type", "==", data.data.Type)
    //   .onSnapshot((QuerySnapShot) => {
    //     QuerySnapShot.forEach((DocumentSnapshot) => {
    //       itemType.push(DocumentSnapshot.data());
    //     });
    //     setType(itemType);
    //   });
  }, []);
  console.log(type);

  return (
    <View
      style={{
        width,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Profiles", { ID: listUser[0].Id })}
      >
        <Image
          style={{
            height: 44,
            width: 44,
            borderRadius: 22,
            shadowColor: "black",
          }}
          source={{
            uri: listUser[0].Avata,
          }}
        />
      </TouchableOpacity>

      {/* <Text>{Image(item.ID_US)}</Text> */}
      <View
        style={{
          flexDirection: "row",
          width: 300,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text>
          <Text style={{ fontWeight: "700" }}>{listUser[0].Name} </Text>
          {type[0].Content}
        </Text>
        <Text>{data.data.Type}</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
