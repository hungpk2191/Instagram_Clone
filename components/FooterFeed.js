import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FooterFeed = (data) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.ava}
          source={require("../assets/Logo/39b3a942d7785c72e61b1fa2f7ded547meo-mat-chu-sad.jpg")}
        />
        <Text style={styles.name}>
          Like by <Text style={{ fontWeight: "500" }}>NgoxHone</Text> and
          <Text style={{ fontWeight: "500" }}>13,3M others</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <Text>
          <Text style={{ fontWeight: "500" }}>billieeilish</Text>{" "}
          {data.data.data.Title}
        </Text>
      </View>
    </View>
  );
};

export default FooterFeed;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginLeft: 10,
  },
  header: { flexDirection: "row", alignItems: "center" },
  ava: { height: 25, width: 25, borderRadius: 12.5 },
  name: {
    marginLeft: 10,
  },
  content: {
    paddingTop: 10,
  },
});
