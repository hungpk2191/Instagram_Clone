import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { db } from "../config";
import React, { useState, useEffect } from "react";
import DATA from "../data";
import { useNavigation } from "@react-navigation/native";

const HeaderFeed = (data) => {
  const navigation = useNavigation();

  const [listUser, setListUser] = useState([DATA[1]]);
  useEffect(() => {
    db.collection("User").onSnapshot((SnapShot) => {
      setListUser(
        SnapShot.docs
          .map((doc) => doc.data())
          .filter((item) => item.Id == data.data.data.ID_US)
      );
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 10,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profiles", { ID: listUser[0].Id })
            }
          >
            <Image
              style={{ height: 40, width: 40, borderRadius: 20 }}
              source={{
                uri: listUser[0].Avata,
              }}
            />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                onPress={() =>
                  navigation.navigate("Profiles", { ID: listUser[0].Id })
                }
                style={styles.name}
              >
                {listUser[0].Name}
              </Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={13}
                color="#0081B4"
                style={{ marginLeft: 5 }}
              />
            </View>
            <Text style={styles.location}>Tokyo, Japan</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderFeed;

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
  header: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  name: { fontWeight: "700" },
  location: {},
});
