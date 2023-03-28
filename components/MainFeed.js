import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import { useState } from "react";
const MainFeed = (data) => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={{  width: "100%", height: 400 }}
        source={{ uri: data.data.data.Content }}
      />
      <View style={styles.footer}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? "heart" : "hearto"}
              size={28}
              color={like ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="comment-o" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Feather name="bookmark" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainFeed;

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
});
