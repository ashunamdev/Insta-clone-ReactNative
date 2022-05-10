import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { Divider } from "react-native-elements";
import { postFooterIcons } from "../../data/posts";

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false)
  return (
    <View style={{ marginBottom: 10 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} liked={liked} setLiked={setLiked}/>
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post?.profile_picture }} style={styles.story} />
        <Text style={styles.userName}>{post.user}</Text>
      </View>
      <Text style={{ color: "white", marginTop:-10, fontWeight: "bold",fontSize:20 }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 250 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post, liked, setLiked }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContiner}>
    <TouchableOpacity onPress={()=>setLiked(!liked)}>
      <Image style={styles.footerIcon} source={{ uri: liked ? postFooterIcons[0].likedImageUrl : postFooterIcons[0].imageUrl,}} />
    </TouchableOpacity>
      
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>
        {post.user}
        {"  "}
      </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 3 }}>
    {post.comments.length > 0 ? (
      <Text style={{ color: "gray" }}>
        View{" "}
        {post.comments.length > 1
          ? `all ${post.comments.length} comments `
          : "comment"}
      </Text>
    ) : (
      <Text style={{ color: "gray" }}>No comments</Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <View style={{ marginTop: 3 }}>
    {post?.comments?.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{comment?.user} {" "}</Text>
          {comment?.comment}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
  userName: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftFooterIconsContiner: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
