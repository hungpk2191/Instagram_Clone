import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { db } from "../../config";
import React, { useState, useEffect } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

const Story = () => {
  const item = [];
  const route = useRoute();
  const [listStory, setListStory] = useState([]);
  const [listStory1, setListStory1] = useState([]);
  useEffect(() => {
    db.collection("Story").orderBy("date")
      .where("ID_US", "==", route.params.ID)
      .onSnapshot((QuerySnapShot) => {
        QuerySnapShot.forEach((DocumentSnapshot) => {
          item.push(DocumentSnapshot.data());
        });
        setListStory(item);
      });
    db.collection("Story").onSnapshot((SnapShot) => {
      setListStory1(SnapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  const newArr = listStory1.filter((object) => {
    return object.ID_US !== route.params.ID;
  });
  let lastListStory = [...listStory, ...newArr];
  return (
    <SafeAreaView style={styles.container}>
      <SwiperFlatList
        index={0}
        // autoplay
        autoplayDelay={5}
        data={lastListStory}
        renderItem={({ item }) => (
          <View style={[styles.child, { backgroundColor: item }]}>
            <Image
              style={{ width, height: height * 0.8, borderRadius: 10 }}
              source={{ uri: item.Content }}
            />
            <View style={styles.footer}>
              <View
                style={{
                  borderWidth: 0.3,
                  margin: 10,
                  height: 43,
                  width: width * 0.7,
                  borderRadius: 100,
                  borderColor: "white",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "gray",
                    height: 30,
                    width: 30,
                    marginLeft: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <FontAwesome5
                    name="camera"
                    size={18}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
              <Ionicons name="paper-plane-sharp" size={24} color="white" />
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  child: { width, justifyContent: "center", alignItems: "center" },
  text: { fontSize: width * 0.2, textAlign: "center" },
  btn: { backgroundColor: "rgba(0,0,0,0)", width: "35%", height: "100%" },
  footer: {
    height: 50,paddingTop:30,
    width,
    backgroundColor: "rgba(0,0,0,0)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
