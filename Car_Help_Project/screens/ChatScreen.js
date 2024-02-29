import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello!", sender: "user" },
    { id: "2", text: "Hi there!", sender: "other" },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const newMessageObj = {
      id: String(messages.length + 1),
      text: newMessage,
      sender: "user",
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={
              item.sender === "user" ? styles.userMessage : styles.otherMessage
            }
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F0F0",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#2196F3",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: "70%",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: "70%",
  },
  messageText: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 8,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ChatScreen;
