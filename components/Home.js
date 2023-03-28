import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderHome from "./HeaderHome";
import { useDispatch, useSelector } from "react-redux";
import { getDataNewFeed } from "../redux/actions/getData";
import StoryAvata from "./StoryAvata";
import Feed from "./Feed";
import { db } from "../config";
const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getDataNewFeed([]));
      db.collection("NewFeed")
        .orderBy("ID_US")
        .onSnapshot((SnapShot) => {
          dispatch(getDataNewFeed(SnapShot.docs.map((doc) => doc.data())));
        });
      setRefreshing(false);
  }, []);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataNewFeed.Data);
  useEffect(() => {
    db.collection("NewFeed")
      .orderBy("ID_US")
      .onSnapshot((SnapShot) => {
        dispatch(getDataNewFeed(SnapShot.docs.map((doc) => doc.data())));
      });
  }, []);
  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView
        horizontal={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StoryAvata />
        <View style={{ height: 0.5, backgroundColor: "#bfbfbf" }} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Feed data={item} />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
