import React, { useRef, useState } from "react";
// import Pinchable from "react-native-pinchable";
import {
  Animated,
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const SeachPage = ({navigation}) => {
  const [check, setcheck] = useState(true);
  const { width, height } = Dimensions.get("screen");
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0.2,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        
      </Animated.View> */}

      {/* <View style={styles.buttonRow}>
        <Button
          title={check ? "Fade In View" : "Fade Out View"}
          onPress={() => {
            setcheck(!check);
            check ? fadeIn() : fadeOut();
          }}
        />
      </View> */}
      <TouchableOpacity
        onPress={() => {
          setcheck(!check);
          // check ? fadeIn() : fadeOut();
        }}
      >
        <Image
          style={{ width: 300, height: 300, borderRadius: 150 }}
          blurRadius={check ? 25 : 0}
          source={{
            uri: check
              ? "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
              : "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>sss</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default SeachPage;
