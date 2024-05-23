import { View, Text } from "react-native";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.user}>{post.user}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon name="thumbs-up" size={20} color="#888" />
          <Text style={styles.iconText}>{post.likes}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="comment" size={20} color="#888" />
          <Text style={styles.iconText}>{post.comments}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  user: {
    fontWeight: "bold",
  },
  content: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
    color: "#888",
  },
});

export default Post;
