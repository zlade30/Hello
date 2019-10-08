import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
});
