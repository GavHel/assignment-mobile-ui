import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const MESSAGES = [
  {
    id: "1",
    title: "Trending",
    message: "r/worldnews is blowing up right now",
    time: "2h",
  },
  {
    id: "2",
    title: "Upvotes",
    message: "Your post got 50 upvotes",
    time: "5h",
  },
  {
    id: "3",
    title: "Reddit",
    message: "Welcome! Explore communities",
    time: "1d",
  },
  {
    id: "4",
    title: "Replies",
    message: "Someone replied to your comment",
    time: "2d",
  },
];

export default function Inbox() {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <Text style={styles.activeText}>Notifications</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.tab}>
          <Text style={styles.inactiveText}>Messages</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.icon}>
              <Text style={{ color: "#fff" }}>🔔</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>

            <Text style={styles.time}>{item.time}</Text>
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
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 12,
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
    borderRadius: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#1a1a1a",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ff4500",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  message: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },
  time: {
    color: "#666",
    fontSize: 11,
  },
});