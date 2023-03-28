import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const BtnEdit = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Edit Profile</Text>
    </TouchableOpacity>
  );
};

export default BtnEdit;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor:"#bfbfbf",
    padding: 3,
  },
});
