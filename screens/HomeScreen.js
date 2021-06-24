import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";

// ---------------------------------------------------------------
import PostCard from "../components/PostCard";
// ---------------------------------------------------------------
import { Container } from "../styles/FeedStyles";
// ---------------------------------------------------------------

const Posts = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../assets/users/user1.jpg"),
    postTime: "4 mins ago",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postImg: require("../assets/post/post1.jpg"),
    liked: true,
    likes: "14",
    comments: "5",
  },
  {
    id: "2",
    userName: "Christen Joe",
    userImg: require("../assets/users/user2.jpg"),
    postTime: "10 mins ago",
    post: "sed do eiusmod tempor incididunt ut labore etaliqua.",
    postImg: require("../assets/post/post2.jpg"),
    liked: true,
    likes: "20",
    comments: "6",
  },
  {
    id: "3",
    userName: "David Buc",
    userImg: require("../assets/users/user3.jpg"),
    postTime: "30 mins ago",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    postImg: require("../assets/post/post3.jpg"),
    liked: true,
    likes: "24",
    comments: "15",
  },
  {
    id: "4",
    userName: "Jenny Doe",
    userImg: require("../assets/users/user1.jpg"),
    postTime: "44 mins ago",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
  {
    id: "5",
    userName: "George Dedilton",
    userImg: require("../assets/users/user4.jpg"),
    postTime: "51 mins ago",
    post: "consectetur adipiscing elit",
    postImg: require("../assets/post/post4.jpg"),
    liked: true,
    likes: "4",
    comments: "1",
  },
  {
    id: "6",
    userName: "Morgen Roger",
    userImg: require("../assets/users/user5.jpg"),
    postTime: "1 hour ago",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postImg: "none",
    liked: true,
    likes: "94",
    comments: "35",
  },
  {
    id: "7",
    userName: "Tressy Rio",
    userImg: require("../assets/users/user6.jpg"),
    postTime: "2 hours ago",
    post: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    postImg: require("../assets/post/post5.jpg"),
    liked: true,
    likes: "64",
    comments: "43",
  },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const list = [];
        await firebase
          .firestore()
          .collection("post")
          .orderBy("postTime", "desc")
          .get()
          .then((querySnapshot) => {
            console.log("Total Posts : ", querySnapshot.size);

            querySnapshot.forEach((doc) => {
              const { post, postImg, postTime, likes, comments, userId } =
                doc.data();
              list.push({
                id: doc.id,
                //if the field name is same as the value name we can simply write the value. for example : instead of -- userId : userId, i can write only userId. But i prefer the first way of writting
                userId: userId,
                userName: "Test Name",
                userImg: require("../assets/users/user1.jpg"),
                postTime: postTime,
                post: post,
                postImg: postImg,
                liked: true,
                likes: likes,
                comments: comments,
              });
            });
          });

        setPosts(list);
        if (loading) {
          setLoading(false);
        }

        // console.log("Posts : ", list);
      } catch (error) {
        console.log("We have got into an error :", error);
      }
    };
    fetchPost();
  }, []);

  function deletePost(postId) {
    console.log("To be deleted Post Id : ", postId);
  }

  return (
    <Container>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard item={item} onDelete={deletePost} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
