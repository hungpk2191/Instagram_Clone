import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import DATA from "../../data";
import { db } from "../../config";
import { useRoute } from "@react-navigation/native";
const Profile = () => {
  const route = useRoute();
  let ID_US;
  try {
    ID_US = route.params.ID;
  } catch {
    ID_US = "us3";
  }
  const [user, setUser] = useState([DATA[1]]);
  useEffect(() => {
    db.collection("User").onSnapshot((SnapShot) => {
      setUser(
        SnapShot.docs
          .map((doc) => doc.data())
          .filter((item) => item.Id == ID_US)
      );
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header data={user} />
      <Main data={user} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
