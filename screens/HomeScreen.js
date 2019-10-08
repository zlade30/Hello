import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import Carousel from 'react-native-smart-carousel';

const data = [
  {
    "id": 0,
    "title": "Nature 1",
    "imagePath": "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg",
  },
  {
    "id": 1,
    "title": "Nature 2",
    "imagePath": "https://b.rgbimg.com/cache1nMsYo/users/j/jo/johnnyberg/600/mjzJjRG.jpg",
  },
  {
    "id": 2,
    "title": "Nature 3",
    "imagePath": "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    "id": 3,
    "title": "Nature 4",
    "imagePath": "https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    "id": 4,
    "title": "Nature 5",
    "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYy0xakKYcLKfEjhVRdyPI6nKFP_jFM46Nwz9mveWyWc-_oc5SA",
  }
]

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { spinAnim: new Animated.Value(0) }
  }

  componentDidMount(){

  }

  onPress = (i) => {
    switch(i){
      case 0:
        this.props.navigation.navigate('Nature1');
        break;
      case 1:
        this.props.navigation.navigate('Nature2');
        break;
      case 2:
        this.props.navigation.navigate('Nature3');
        break;
      case 3:
        this.props.navigation.navigate('Nature4');
        break;
      case 4:
        this.props.navigation.navigate('Nature5');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <Carousel
          data={data}
          autoPlay={true}
          playTime={2000}
          parallax={true}
          height={300}
          titleColor='white'
          navigation={true}
          navigationType="dots"
          onPress={(i) => this.onPress(i)}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
