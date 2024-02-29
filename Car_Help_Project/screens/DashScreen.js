import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import UserProfile from "./UserProfile";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import AddItemScreen from "./AddItemScreen";
import ChatScreen from "./ChatScreen";

const gridItems = [
  // ... (your grid items data)
];

const GridItem = ({ item }) => (
  <View style={styles.gridItem}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <Text>{item.name}</Text>
    <Text>{item.price}</Text>
    <Text>{item.location}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const DashScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Search") {
          iconName = "search";
        } else if (route.name === "Add") {
          iconName = "add-circle";
        } else if (route.name === "Chat") {
          iconName = "chatbubbles";
        } else if (route.name === "Profile") {
          iconName = "person";
        }

        return <Icon name={iconName} color={color} size={size} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      style: {
        display: "flex",
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Add" component={AddItemScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Profile" component={UserProfile} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: "45%",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default DashScreen;
