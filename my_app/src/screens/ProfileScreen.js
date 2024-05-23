import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Post from "../components/Post"; // Make sure this component exists

const user = {
  coverPhoto: "https://i.redd.it/gk4cplcv63v61.png",
  profilePhoto:
    "https://pbs.twimg.com/profile_images/829892143225401344/8XtPV2NW_400x400.jpg",
  name: "John Doe",
  bio: "This is a short bio about John Doe.",
  friends: 120,
  posts: 45,
};

const posts = [
  {
    id: "1",
    user: "John Doe",
    avatar:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg", // Base64 encoded image
    content: "This is the first post content.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbjfH8Gfdgxqq-GpnJUX5NALtCokAauFhIbSsgIpIow&s",
    likes: 10,
    comments: 2,
  },
  {
    id: "2",
    user: "Jane Smith",
    avatar: "data:image/jpeg;base64,...", // Base64 encoded image
    content: "This is the second post content.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbjfH8Gfdgxqq-GpnJUX5NALtCokAauFhIbSsgIpIow&s",
    likes: 20,
    comments: 5,
  },
];

const UserProfile = () => {
  const renderPost = ({ item }) => <Post post={item} />;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.profileSection}>
        <Image
          source={{ uri: user.profilePhoto }}
          style={styles.profilePhoto}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>{user.friends} Friends</Text>
          <Text style={styles.stat}>{user.posts} Posts</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postsList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profileSection: {
    alignItems: "center",
    marginTop: -50,
    paddingBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 5,
  },
  stats: {
    flexDirection: "row",
    marginTop: 10,
  },
  stat: {
    fontSize: 16,
    color: "#666",
    marginHorizontal: 10,
  },
  postsList: {
    paddingHorizontal: 10,
  },
});

export default UserProfile;
