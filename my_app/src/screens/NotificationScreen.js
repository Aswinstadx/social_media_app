import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const notifications = [
  {
    id: "1",
    title: "New Message",
    description: "You have received a new message from John Doe",
    time: "2 mins ago",
  },
  {
    id: "2",
    title: "Friend Request",
    description: "Jane Smith sent you a friend request",
    time: "10 mins ago",
  },
  {
    id: "3",
    title: "Event Reminder",
    description: "Don't forget about the meeting at 5 PM",
    time: "1 hour ago",
  },
  // Add more notifications here
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginTop:45
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
    color: "#333",
  },
  listContent: {
    paddingHorizontal: 10,
  },
  notificationItem: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  notificationTime: {
    fontSize: 14,
    color: "#888",
  },
  notificationDescription: {
    fontSize: 16,
    color: "#555",
  },
});

export default NotificationScreen;
