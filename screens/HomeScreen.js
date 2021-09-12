import React, {Component, useState} from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import call from 'react-native-phone-call';
import * as Speech from 'expo-speech';
import ReactCardFlip from 'react-card-flip';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Home = ({navigation}) => {
  const args = {
    number: '4372490254', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };
  var axios = require('axios');

  var config = {
    method: 'get',
    url:
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.458290%2C-80.539580&radius=5000&keyword=scotiabank&key=AIzaSyCDv-I-BRtIK9ND4ePsq5x2N3hJSdf8JIo',
    headers: {},
  };

  const renderFront = () => {
    return (
      <View style={styles.cardStyle1}>
        <View style={styles.balancesRow}>
          <Text style={styles.leftText}>BALANCES</Text>
          <Image
            source={require('../assets/images/balance.png')}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
      </View>
    );
  };

  const renderBack = () => {
    return (
      <View style={styles.something}>
        <View style={styles.banking4Row}>
          <Text style={styles.banking4}> Banking</Text>
        </View>
        <View style={styles.rect6}></View>
        <Text style={styles.chequing1}>Chequing</Text>
        <Text style={styles.chequing2}>$2,943.68</Text>
        <View style={styles.rect7}></View>
        <Text style={styles.savings1}>Savings</Text>
        <Text style={styles.chequing3}>$5,272.23</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Image
            source={require('../assets/images/download__1_-removebg-preview.png')}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.lilianasHomepage}>Adam&#39;s Homepage</Text>
        </View>
        <ScrollView
          style={{height: 510, alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
        >
          {/* //First Balances */}
          <GestureFlipView width={360} height={190} gestureEnabled={true}>
            {renderBack()}
            {renderFront()}
          </GestureFlipView>
          {/* <View style={styles.cardStyle1}>
            <View style={styles.balancesRow}>
              <Text style={styles.leftText}>BALANCES</Text>
              <Image
                source={require('../assets/images/balance.png')}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
            </View>
          </View> */}

          <View style={styles.rect4}>
            <View style={styles.image4Row}>
              <Image
                source={require('../assets/images/bills-removebg-preview.png')}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Text style={styles.bills}>PAYMENTS</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Transfers');
            }}
          >
            <View style={styles.cardStyle1}>
              <View style={styles.balancesRow}>
                <Text style={styles.leftText}>TRANSFERS</Text>
                <Image
                  source={require('../assets/images/22373-200.png')}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('tel:18004726842');
            }}
          >
            <View style={styles.rect4}>
              <View style={styles.image4Row}>
                <Image
                  source={require('../assets/images/call.png')}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <Text style={styles.bills}>CONTACT</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              axios(config)
                .then(function (response) {
                  const result = response.data.results[0].place_id;
                  var config2 = {
                    method: 'get',
                    url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=43.458290%2C-80.539580&destinations=place_id:${result}&key=AIzaSyCDv-I-BRtIK9ND4ePsq5x2N3hJSdf8JIo`,
                    headers: {},
                  };
                  axios(config2)
                    .then(function (response2) {
                      const address = response2.data.destination_addresses;
                      const distance =
                        response2.data.rows[0].elements[0].distance.text;
                      const thingToSay = `The nearest Scotiabank Branch is located at ${address},, and is ${distance} away`;
                      Speech.speak(thingToSay);
                    })
                    .catch(function (error2) {
                      console.log(error2);
                    });
                  //NOW FETCH DISTANCE
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            <View style={styles.rect5}>
              <Text style={styles.findNearestAtm1}>FIND NEAREST ATM</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          var dataToSend;
          const python = spawn('python3', ['./speecToText.py']);
          console.log(python);
          // axios.post('/readPython').then((response) => {
          //   python.stdout.on('data', function (data) {
          //     dataToSend = data.toString();
          //   });
          //   console.log(dataToSend);
          //   python.stderr.on('data', (data) => {
          //     console.error(`stderr: ${data}`);
          //   });
          //   python.on('exit', (code) => {
          //     console.log('Hello');
          //   });
          // });
        }}
      >
        <Image
          source={require('../assets/images/image_iXps.jpeg')}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: '#000000',
  },
  rect1: {
    width: '100%',
    height: 230,
    backgroundColor: 'rgba(233,33,33,1)',
  },
  image1: {
    width: 103,
    height: 104,
    marginTop: 43,
    marginLeft: 1,
  },
  lilianasHomepage: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: 7,
    marginLeft: 24,
  },
  cardStyle1: {
    width: '100%',
    height: 175,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    marginTop: 25,
  },
  banking4: {
    fontFamily: 'roboto-700',
    color: 'rgba(208,2,27,1)',
    fontSize: 16,
    textAlign: 'center',
  },
  banking4Row: {
    height: 19,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 152,
    marginRight: 143,
  },
  leftText: {
    fontFamily: 'montserrat-700',
    color: 'rgba(208,2,27,1)',
    fontSize: 25,
    marginTop: 54,
    marginLeft: 10,
  },
  image5: {
    width: 126,
    height: 137,
    marginLeft: 64,
  },
  balancesRow: {
    height: 137,
    flexDirection: 'row',
    flex: 1,
    marginRight: 25,
    marginLeft: 15,
    marginTop: 23,
  },
  rect4: {
    width: 374,
    height: 175,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 1,
  },
  image4: {
    width: 133,
    height: 147,
  },
  bills: {
    fontFamily: 'montserrat-700',
    color: 'rgba(208,2,27,1)',
    fontSize: 25,
    marginLeft: 40,
    marginTop: 60,
  },
  image4Row: {
    height: 147,
    flexDirection: 'row',
    flex: 1,
    marginRight: 38,
    marginLeft: 38,
    marginTop: 13,
  },
  image3: {
    height: 70,
    width: 60,
    marginTop: 15,
    alignSelf: 'center',
  },
  rect5: {
    width: 375,
    height: 50,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 20,
    marginBottom: 15,
  },
  findNearestAtm1: {
    fontFamily: 'roboto-700',
    color: 'rgba(208,2,27,1)',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 106,
  },
  something: {
    width: 374,
    height: 175,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderLeftWidth: 2,
    marginLeft: 2,
    borderColor: '#000000',
    marginTop: 32,
  },
  rect6: {
    width: 367,
    height: 1,
    backgroundColor: '#E6E6E6',
    marginTop: 10,
    marginLeft: 7,
  },
  chequing1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 157,
  },
  chequing2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginLeft: 156,
  },
  rect7: {
    width: 367,
    height: 1,
    backgroundColor: '#E6E6E6',
    marginTop: 21,
    marginLeft: 7,
  },
  savings1: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 162,
  },
  chequing3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 1,
    marginLeft: 156,
  },
});

export default Home;
