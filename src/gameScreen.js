import React, { useRef, useEffect } from 'react';
import {TouchableOpacity,View, Text, StyleSheet} from 'react-native';

const GameScreen = () => {
  return(
  <View style={styles.container}>
    
    <TouchableOpacity style={styles.buttonGame}>
      <Text style={styles.textButton}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonGame}>
      <Text style={styles.textButton}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonGame}>
      <Text style={styles.textButton}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonGame}>
      <Text style={styles.textButton}>4</Text>
    </TouchableOpacity>  
  </View>
  );
};
GameScreen.navigationOptions = {
  title: 'About',
}


const styles = StyleSheet.create({
    
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5d1f8',
  },
  buttonGame: {
    height: 50,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#9a94eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },  
  textButton: {
    fontSize: 22,
    color: '#fff',
  }

});

export default GameScreen;

