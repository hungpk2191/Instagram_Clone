import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostStory = () => {
  return (
    <SafeAreaView>
      <View style={styles.circle}>
        <View style={{ padding: 3.3, marginRight: 7 }}>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostStory;

const styles = StyleSheet.create({
  container: {},
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
