import { View, Text, Button } from "react-native";
import React from "react";

const Mycomponent = () => {
  return (
    <View>
      <Text
        style={{ fontSize: 40, color: "red", marginLeft: 20, marginTop: 50 }}
      >
        Hello !!...
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginTop: 40,
          // marginLeft: 60,
          color: "#666545",
          marginBottom: 10,
        }}
      >
        React Native
      </Text>
      <Button title="Click Me" />
    </View>
  );
};

export default Mycomponent;
