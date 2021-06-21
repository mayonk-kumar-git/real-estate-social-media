import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// ---------------------------------------------------------------

// ---------------------------------------------------------------
import {
  Card,
  UserImg,
  UserInfo,
  UserInfoText,
  UserName,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../styles/FeedStyles";
// ---------------------------------------------------------------

export default function PostCard({ item }) {
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg == "none" ? (
        <Divider></Divider>
      ) : (
        <PostImg source={item.postImg} />
      )}

      <InteractionWrapper>
        <Interaction>
          <Ionicons
            name={item.liked ? "heart" : "heart-outline"}
            size={25}
            color={item.liked ? "red" : "black"}
          />
          <InteractionText>{item.likes == 0 ? "" : item.likes}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>
            {item.comments == 0 ? "" : item.comments}
          </InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="send-outline" size={25} />
          <InteractionText></InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
}
