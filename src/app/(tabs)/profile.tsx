import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const POSTS = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
    upvotes: 120,
    comments: 14,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    upvotes: 87,
    comments: 9,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    upvotes: 45,
    comments: 3,
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.banner} />

      <View style={styles.header}>
        <Image
          source={{
            uri: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.name}>RandomUser</Text>
          <Text style={styles.handle}>u/RandomUser</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1.2k</Text>
          <Text style={styles.statLabel}>Karma</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>230</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2y</Text>
          <Text style={styles.statLabel}>Cake Day</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeText}>Posts</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.tab}>
          <Text style={styles.inactiveText}>Comments</Text>
        </View>

        <View style={styles.tab}>
          <Text style={styles.inactiveText}>About</Text>
        </View>
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postMeta}>
              ▲ {item.upvotes}   💬 {item.comments}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  banner: {
    height: 120,
    backgroundColor: "#222",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: -30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#000",
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  handle: {
    color: "#888",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  statLabel: {
    color: "#888",
    fontSize: 12,
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  activeTab: {
    marginRight: 20,
  },
  tab: {
    marginRight: 20,
  },
  activeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  inactiveText: {
    color: "#888",
    fontSize: 16,
  },
  underline: {
    height: 2,
    backgroundColor: "#fff",
    marginTop: 4,
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    padding: 16,
  },
  postTitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  postMeta: {
    color: "#888",
    fontSize: 12,
  },
});