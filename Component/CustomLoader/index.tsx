import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';


const CustomLoader = ({visible}: any) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <FastImage
          source={require('../../Assets/Images/logoGif.gif')}
          style={{width: 200, height: 200}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({});
