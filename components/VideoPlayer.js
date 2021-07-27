import React from "react";
import { Video } from "expo-av";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

const VideoPlayer = (props) => {
  console.log(props.video);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.background}>
        <Video
          key={props.video.uri}
          source={props.video.uri}
          isLooping
          resizeMode="cover"
          style={styles.video}
          shouldPlay={false}
          isMuted
          rate={1.0}
        />
      </View>
      <View style={styles.overlay}>
        <View style={styles.topBar}>
          <Text style={{ color: "#ccc", fontSize: 20, fontWeight: "bold" }}>
            Following
          </Text>
          <View style={{ height: 20, width: 2, backgroundColor: "white" }} />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            For You
          </Text>
        </View>
        <View style={styles.bottomView}>
          <View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {props.video.user}
            </Text>
            <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}>
              {props.video.description}
            </Text>
            <View style={styles.musicView}>
              <MaterialCommunityIcons name="music" color="white" size={22} />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Coldplay - Higher Power
              </Text>
            </View>
          </View>
          <View style={styles.optionsView}>
            <TouchableOpacity style={styles.option} activeOpacity={0.7}>
              <AntDesign name="heart" color="white" size={40} />
              <Text style={styles.optionLbl}>{props.video.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} activeOpacity={0.7}>
              <AntDesign name="message1" color="white" size={40} />
              <Text style={styles.optionLbl}>{props.video.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} activeOpacity={0.7}>
              <FontAwesome name="share" color="white" size={40} />
              <Text style={styles.optionLbl}>{props.video.share}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} activeOpacity={0.7}>
              <Image
                source={require("../assets/vinyl.png")}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  topBar: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    alignItems: "center",
  },
  bottomView: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 20,
  },
  musicView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  optionsView: {
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    marginTop: 30,
  },
  optionLbl: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

export default VideoPlayer;
