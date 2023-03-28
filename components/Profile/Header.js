import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import BtnEdit from "./BtnEdit";
import StoryAvata from "../StoryAvata";
import DATA from "../../data";

const Header = (data) => {
  let dataUser = data.data;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="lock" size={15} color="black" />
          <Text
            style={{ paddingHorizontal: 5, fontWeight: "600", fontSize: 16 }}
          >
            {dataUser[0].Name}
          </Text>
          <TouchableOpacity>
            <AntDesign name="down" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ position: "absolute", right: 0 }}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.InfoInsta}>
        <View style={{ width: "30%" }}>
          <View
            style={{
              height: 90,
              width: 90,
              borderWidth: 1.5,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 45,
              borderColor: "#bfbfbf",
            }}
          >
            <Image
              style={styles.ava}
              source={{
                uri: dataUser[0].Avata,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "70%",
          }}
        >
          <View style={styles.parameter}>
            <Text style={styles.bold}>{dataUser[0].Post}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.parameter}>
            <Text style={styles.bold}>{dataUser[0].Followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.parameter}>
            <Text style={styles.bold}>{dataUser[0].Following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.Info}>
        <Text style={{ fontWeight: "600" }}>{dataUser[0].Name}</Text>
        {dataUser[0].Caption.map((cap, Index) => (
          <Text key={Index}>{cap}</Text>
        ))}
      </View>
      <BtnEdit />
      <StoryAvata />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { paddingTop: "10%", marginHorizontal: 10 },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  ava: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  parameter: {
    flexDirection: "column",
    alignItems: "center",
  },
  bold: {
    fontWeight: "600",
    fontSize: 16,
  },
  InfoInsta: { flexDirection: "row", alignItems: "center", paddingTop: 10 },
  Info: { paddingTop: 10 },
});
