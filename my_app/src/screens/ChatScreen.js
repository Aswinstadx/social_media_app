import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const users = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    time: "2:45 PM",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    lastMessage: "Let's catch up later.",
    time: "1:30 PM",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
  },
  {
    id: "3",
    name: "Alex Johnson",
    lastMessage: "Got it, thanks!",
    time: "12:15 PM",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg",
  },
  // Add more users here
];

const ChatScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate("ChatDetail", { user: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContainer}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="chat" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 40,
  },
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  userItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  lastMessage: {
    fontSize: 16,
    color: "#888",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});

export default ChatScreen;
