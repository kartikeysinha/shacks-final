import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageStackColumnRow}>
        <View style={styles.imageStackColumn}>
          <View style={styles.imageStack}>
            <Image
              source={require('../assets/images/logo.jpeg')}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Image
              source={require('../assets/images/image_iXps.jpeg')}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.heyScotia}>Hey Scotia</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/images/image_iXps.jpeg')}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 254,
    width: 280,
  },
  image2: {
    position: 'absolute',
    top: 224,
    left: 28,
    height: 427,
    width: 317,
  },
  imageStack: {
    width: 339,
    height: 651,
  },
  heyScotia: {
    fontFamily: 'montserrat-700',
    color: 'rgba(208,2,27,1)',
    fontSize: 48,
    marginTop: 21,
    marginLeft: 80,
  },
  imageStackColumn: {
    width: 339,
    marginBottom: 11,
  },
  image3: {
    height: 427,
    width: 317,
    marginLeft: 111,
    marginTop: 314,
  },
  imageStackColumnRow: {
    height: 741,
    flexDirection: 'row',
    marginTop: -31,
    marginLeft: 7,
    marginRight: -399,
  },
});

export default LoginScreen;
