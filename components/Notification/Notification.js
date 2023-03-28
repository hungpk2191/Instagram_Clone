import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import Index from "./Index";
import { db } from "../../config";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const Notification = () => {
  const navigation = useNavigation();
  const [listNotification, setLisNotification] = useState([]);
  useEffect(() => {
    db.collection("Notification").onSnapshot((SnapShot) => {
      setLisNotification(SnapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{
          width,
          paddingTop: "10%",
          alignItems: "center",
          flexGrow: 1,
          // justifyContent: "center",
        }}
        data={listNotification}
        renderItem={({ item }) => <Index data={item} />}
        // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
