import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View style={styles.container}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/564x/cd/fe/9d/cdfe9d6d32a73a0bbc1472202c298c20.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/564x/23/52/a2/2352a2ec342f01d2ce0cdabe2cb22ce0.jpg",
            }}
          />

          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/564x/0d/d3/8e/0dd38ea1a93f6220a71138eb694ddb13.jpg",
            }}
          />

        </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
  image: { height: 124, width: "33%", marginTop: 1.4 },
});
