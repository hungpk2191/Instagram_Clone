import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../config";
import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../redux/reducers/getData";
import { getDataUser } from "../../redux/actions/getData";
import { setData } from "../../redux/actions/getData";
import { DataSelector, isLoggedSelector } from "../../redux/Selector";
const Post = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Data.Data);
  const fetchData = () =>
    db.collection("User").onSnapshot((SnapShot) => {
      dispatch(getDataUser(SnapShot.docs.map((doc) => doc.data())));
    });
  useEffect(() => {
    fetchData();
  }, []);
  // const isLogged = useSelector(isLoggedSelector);
  // const [listStory, setListStory] = useState([]);
  // useEffect(() => {
  //   db.collection("Story").onSnapshot((SnapShot) => {
  //     setListStory(SnapShot.docs.map((doc) => doc.data()));
  //   });
  // }, []);
  // let newArr = listStory;
  // newArr = newArr.filter((item) => item.ID_US == "us1");

  return (
    <View style={styles.container}>
      {/* <Text>{data}</Text>
      <Text>{isLogged? 'login':'logout'}</Text>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-around",
          width: "60%",
        }}
      >
        <Button onPress={() => dispatch(increment())} title="+" />
        <Button onPress={() => dispatch(decrement())} title="-" />
        <Button onPress={() => dispatch(setLogged())} title="IN - OUT" />
      </View> */}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
