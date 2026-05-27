import { View, Text, Image, StyleSheet } from "react-native";

type PostType = {
  subreddit: string;
  user: string;
  title: string;
  image: string | null;
  upvotes: number;
  comments: number;
};

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.meta}>
        {post.subreddit} • {post.user}
      </Text>

      <Text style={styles.title}>{post.title}</Text>

      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Text style={styles.vote}>▲</Text>
          <Text style={styles.voteCount}>{post.upvotes}</Text>
          <Text style={styles.vote}>▼</Text>

          <Text style={styles.comment}>💬 {post.comments}</Text>
        </View>

        <View style={styles.rightActions}>
          <Text style={styles.icon}>★</Text>
          <Text style={styles.icon}>↗</Text>
          <Text style={styles.icon}>⋯</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },

  meta: {
    color: "#888",
    fontSize: 11,
    marginBottom: 2,
  },

  title: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom: 6,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  vote: {
    color: "#888",
    fontSize: 14,
    marginRight: 4,
  },

  voteCount: {
    color: "#ccc",
    fontSize: 12,
    marginRight: 10,
  },

  comment: {
    color: "#888",
    fontSize: 12,
  },

  rightActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: "#888",
    fontSize: 14,
    marginLeft: 15,
  },
});
