
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
      <Image style={styles.imgQuadrado} source={require('./assets/quadrados.png')}/>
      <TouchableOpacity style={styles.touchableButton} onPress={() => navigation.navigate('About')}>
        <Text style={styles.textButton}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );


HomeScreen.navigationOptions = {
  title: 'Home',
  backgroundColor: '#d5d1f8',
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5d1f8'
  },
  imgQuadrado: {
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  touchableButton: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#9a94eb',
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginTop: 20,
    
  },
  textButton: {
    color: '#fff',
    fontSize: 22,
  }
});


export default HomeScreen;