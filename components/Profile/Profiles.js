import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import DATA from "../../data";
import { db } from "../../config";
import { useRoute } from "@react-navigation/native";

const Profiles = () => {
  const route = useRoute();
  let ID_US;
  try {
    ID_US = route.params.ID;
  } catch {
    ID_US = "us3";
  }
  console.log(ID_US);
  const [user, setUser] = useState([DATA[1]]);
  useEffect(() => {
    const item = [];
    db.collection("User")
      .where("Id", "==", ID_US)
      .onSnapshot((QuerySnapShot) => {
        QuerySnapShot.forEach((DocumentSnapshot) => {
          item.push(DocumentSnapshot.data());
        });
        setUser(item);
      });
  }, []);
  console.log(user);
  return (
    <View style={styles.container}>
      <Header data={user} />
      <Main data={user} />
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
