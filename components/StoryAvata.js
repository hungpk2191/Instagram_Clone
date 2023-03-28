import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { db } from "../config";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import PostStory from "./PostStory";
import { useNavigation } from "@react-navigation/native";

const StoryAvata = () => {
  const item = [];
  const [listStory, setListStory] = useState([]);
  const navigation = useNavigation();
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    db.collection("User").onSnapshot((SnapShot) => {
      setListUser(SnapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}
      >
        <View style={styles.circle}>
          <TouchableOpacity style={{ padding: 3.3, marginRight: 7 }}>
            <Image
              style={styles.ava}
              source={require("../assets/Logo/39b3a942d7785c72e61b1fa2f7ded547meo-mat-chu-sad.jpg")}
            />
            <View
              style={{
                position: "absolute",
                top: 40,
                left: 45,
                backgroundColor: "white",
                borderRadius: 20,
                borderWidth: 0.5,
                alignItems: "center",
              }}
            >
              <AntDesign name="pluscircle" size={24} color="#0081B4" />
            </View>
          </TouchableOpacity>
          {listUser.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.avaLinebder}
                onPress={() => navigation.navigate("Story", { ID: item.Id })}
              >
                <Image
                  style={styles.ava}
                  source={{
                    uri: `${item.Avata}`,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  bottom: -10,
                }}
              >
                {item.Name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryAvata;

const styles = StyleSheet.create({
  container: { height: 125 },
  circle: {
    marginTop: 25,
    // flex: 0.1,
    height: 80,
    width: "100%",
    marginHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },
  ava: {
    width: 60,
    height: 60,
    borderRadius: 35,

    // padding: 0,
  },
  avaLinebder: {
    borderColor: "red",
    borderWidth: 1.5,
    borderRadius: 40,
    justifyContent: "center",
    height: 70,
    width: 70,
    padding: 3.3,
    marginHorizontal: 7,
  },
});
