import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";

// ---------------------------------------------------------------
import { AuthContext } from "../navigation/AuthProvider";
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

export default function PostCard({ item, onDelete, onPressUserInfo }) {
  const { user } = useContext(AuthContext);

  return (
    <Card>
      <UserInfo>
        <TouchableOpacity onPress={onPressUserInfo}>
          <UserImg source={item.userImg} />
        </TouchableOpacity>
        <UserInfoText>
          <TouchableOpacity onPress={onPressUserInfo}>
            <UserName>{item.userName}</UserName>
          </TouchableOpacity>
          <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg == null ? (
        <Divider></Divider>
      ) : (
        <PostImg source={{ uri: item.postImg }} />
      )}

      <InteractionWrapper>
        <Interaction>
          <Ionicons
            name={item.likes == 0 ? "heart" : "heart-outline"}
            size={25}
            color={item.likes == 0 ? "red" : "black"}
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

        {/* edit this after wards only show this delete button in profile section */}
        {user.uid == item.userId ? (
          <Interaction onPress={() => onDelete(item.id)}>
            <Ionicons name="md-trash-bin" size={25} color="orange" />
            <InteractionText></InteractionText>
          </Interaction>
        ) : null}
      </InteractionWrapper>
    </Card>
  );
}
