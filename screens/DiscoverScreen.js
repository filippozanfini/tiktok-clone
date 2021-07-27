import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PagerView from "react-native-pager-view";
import { Video } from "expo-av";

import { VIDEOS } from "../data/sample_data";
import VideoPlayer from "../components/VideoPlayer";

const DiscoverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <PagerView style={styles.page} orientation="vertical">
        {VIDEOS.map((v) => {
          return <VideoPlayer video={v} />;
        })}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  page: {
    width: "100%",
    flex: 1,
  },
});

export default DiscoverScreen;
