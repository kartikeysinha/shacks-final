import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const TransferScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.rect1}>
            <Image
              source={require('../assets/images/download__1_-removebg-preview.png')}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            <Text style={styles.transferMoney}>Transfer Money</Text>
          </View>
          <Text style={styles.to}>TO:</Text>
          <View style={styles.rect6}>
            <View style={styles.selectContactRow}>
              <Text style={styles.selectContact}>Select Contact</Text>
              <EntypoIcon name="chevron-down" style={styles.icon}></EntypoIcon>
            </View>
          </View>
          <Text style={styles.from}>FROM:</Text>
          <View style={styles.rect7}>
            <View style={styles.selectAccountRow}>
              <Text style={styles.selectAccount}>Select Account</Text>
              <EntypoIcon name="chevron-down" style={styles.icon1}></EntypoIcon>
            </View>
          </View>
          <Text style={styles.or}>OR</Text>
          <Text style={styles.loremIpsum}>
            Tell Scotia &quot;Send $20 to Adam&quot;
          </Text>
        </View>
        <Image
          source={require('../assets/images/image_iXps.jpeg')}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  group: {
    top: 0,
    width: 375,
    height: 729,
    position: 'absolute',
    left: 0,
  },
  rect1: {
    width: 400,
    height: 230,
    backgroundColor: 'rgba(233,33,33,1)',
  },
  image1: {
    width: 103,
    height: 104,
    marginTop: 43,
    marginLeft: 1,
  },
  transferMoney: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: 9,
    marginLeft: 27,
  },
  to: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
    marginTop: 55,
    marginLeft: 20,
  },
  rect6: {
    width: 327,
    height: 54,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 12,
    marginLeft: 24,
  },
  selectContact: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    marginLeft: -1,
    marginTop: 11,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 58,
  },
  selectContactRow: {
    height: 46,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 84,
  },
  from: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
    marginTop: 28,
    marginLeft: 20,
  },
  rect7: {
    width: 327,
    height: 54,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 16,
    marginLeft: 24,
  },
  selectAccount: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    marginTop: 12,
  },
  icon1: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 49,
  },
  selectAccountRow: {
    height: 46,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 87,
  },
  or: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
    marginTop: 52,
    marginLeft: 167,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 49,
    marginLeft: 58,
  },
  image5: {
    position: 'absolute',
    top: 688,
    left: 146,
    height: 83,
    width: 69,
  },
  groupStack: {
    width: 375,
    height: 771,
  },
});

export default TransferScreen;
