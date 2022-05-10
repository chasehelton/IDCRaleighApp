import React, { useState, useCallback, useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Videos() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.youtube.com/embed/MhkGQAoc7bc'}}
        style={styles.video}
      />
      <WebView
        source={{uri: 'https://www.youtube.com/embed/PGUMRVowdv8'}}
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});
