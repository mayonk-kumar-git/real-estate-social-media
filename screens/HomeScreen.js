import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as firebase from "firebase";

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

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (deleted) {
      fetchPost();
      setDeleted(false);
    }
  }, [deleted]);

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
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
  }

  function deleteFirestoreData(postId) {
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .delete()
      .then(() => {
        console.log("Post has been successfully deleted");
        Alert.alert("Deleted!!", "Your post has been deleted successfully!");
      })
      .catch((e) => {
        console.log("We have got into an error ", e);
      });
  }

  function deletePost(postId) {
    console.log("To be deleted Post Id : ", postId);

    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const { postImg } = documentSnapshot.data();
          console.log("postImg : ", postImg);
          if (postImg != null) {
            console.log("here");
            const storageRef = firebase.storage().refFromURL(postImg);
            const imageRef = firebase.storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully`);
              })
              .catch((e) => {
                console.log("We have got into an error ", e);
              });
          }
          deleteFirestoreData(postId);
          setDeleted(true);
        }
      })
      .catch((e) => {
        console.log("We have an error : ", e);
      });
  }

  function handleDelete(postId) {
    Alert.alert(
      "Delete post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => deletePost(postId),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            onDelete={handleDelete}
            onPressUserInfo={() =>
              navigation.navigate("HomeProfile", { userId: item.userId })
            }
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
