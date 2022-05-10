import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Videos from './Videos';

export default function App() {
  return (
    <Videos />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
    maxHeight: 0,
    maxWidth: 0,
    flex: 1,
  },
});
