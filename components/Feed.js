import { StyleSheet, View } from "react-native";
import React from "react";
import MainFeed from "./MainFeed";
import HeaderFeed from "./HeaderFeed";
import FooterFeed from "./FooterFeed";
const Feed = (data) => {
  return (
    <View style={styles.container}>
      <HeaderFeed data={data} />
      <MainFeed data={data} />
      <FooterFeed data={data} />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
});
