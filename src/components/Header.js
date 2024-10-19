import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/HeaderStyles';

const translateImage = require('../../assets/translate.png');
const Header = ({ title, toggleLanguage, lang }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={toggleLanguage} style={styles.button}>
        <Image 
          source={translateImage} 
          style={styles.translateImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
