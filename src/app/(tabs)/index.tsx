import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "../../../components/Post";

const DATA = [
  {
    id: "1",
    subreddit: "r/mobiledev",
    user: "u/gavin",
    title: "Mobile UI Design Assignment",
    image: "https://picsum.photos/500",
    upvotes: 236,
    comments: 112,
  },
  {
    id: "2",
    subreddit: "r/memes",
    user: "u/funny",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/501",
    upvotes: 542,
    comments: 78,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.menu}>☰</Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Find anything</Text>
        </View>

        <Text style={styles.add} onPress={() => router.push("../post/create")}>
          ＋
        </Text>
      </View>

      {/* POSTS */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  menu: {
    color: "#fff",
    fontSize: 18,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ff4500",
    borderRadius: 20,
    padding: 6,
  },
  searchText: {
    color: "#888",
  },
  add: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
});
