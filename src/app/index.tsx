import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import Post from "../../components/Post";

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
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    image: "https://picsum.photos/501",
    upvotes: 542,
    comments: 78,
  },
];

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.menu}>☰</Text>
            <Image
              source={{
                uri: "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png",
              }}
              style={styles.logo}
            />
          </View>

          <View style={styles.searchBar}>
            <Text style={styles.searchText}>Find anything</Text>
          </View>

          <Text style={styles.add}>＋</Text>
        </View>

        {/* POSTS */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post post={item} />}
          contentContainerStyle={{ paddingBottom: 140 }}
        />

        {/* ALERT BUTTON */}
        <View style={styles.alertButtonContainer}>
          <Button
            title="Alert"
            color="#ff4500"
            onPress={() => Alert.alert("Alert Button pressed")}
          />
        </View>

        {/* BOTTOM NAV */}
        <View style={styles.bottomNav}>
          <View style={styles.navItemContainer}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navLabelActive}>Home</Text>
          </View>

          <View style={styles.navItemContainer}>
            <Text style={styles.navIcon}>📥</Text>
            <Text style={styles.navLabel}>Inbox</Text>
          </View>

          <View style={styles.navItemContainer}>
            <Text style={styles.navIcon}>🙂</Text>
            <Text style={styles.navLabel}>You</Text>
          </View>
        </View>
      </View>
    </>
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
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },

  menu: {
    color: "#fff",
    fontSize: 18,
    marginRight: 6,
  },

  logo: {
    width: 20,
    height: 20,
  },

  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ff4500",
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  searchText: {
    color: "#888",
    fontSize: 13,
  },

  add: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },

  alertButtonContainer: {
    position: "absolute",
    bottom: 70, 
    left: 10,
    right: 10,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#1a1a1a",
    backgroundColor: "#000",
  },

  navItemContainer: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 18,
    color: "#888",
  },

  navLabel: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },

  navLabelActive: {
    fontSize: 11,
    color: "#fff",
    marginTop: 2,
  },
});