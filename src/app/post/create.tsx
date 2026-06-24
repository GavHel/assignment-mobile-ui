import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreatePost() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.close} onPress={() => router.back()}>
          ✕
        </Text>

        <Pressable>
          <Text style={styles.post}>Post</Text>
        </Pressable>
      </View>

      {/* COMMUNITY */}
      <View style={styles.community}>
        <Text style={styles.communityText}>Select a community</Text>
      </View>

      {/* TITLE */}
      <TextInput
        placeholder="Title"
        placeholderTextColor="#666"
        style={styles.title}
      />

      {/* BODY */}
      <TextInput
        placeholder="body text (optional)"
        placeholderTextColor="#666"
        style={styles.body}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  close: {
    color: "#fff",
    fontSize: 18,
  },
  post: {
    color: "#888",
    fontSize: 16,
  },
  community: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  communityText: {
    color: "#ccc",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  body: {
    color: "#aaa",
    fontSize: 14,
  },
});
