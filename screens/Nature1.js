import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render() {
    return (
      <View style={styles.content}>
        <Image
          style={{width: '100%', height: 300}}
          resizeMode='cover'
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg' }} />
        <Text style={styles.textContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Nature 1'
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10, 
    marginLeft: 10
  },
  textContent: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'justify'
  }
});
