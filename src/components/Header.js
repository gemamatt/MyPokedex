import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/HeaderStyles';

const Header = ({ title, toggleLanguage, lang }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Button
        title={lang === 'es' ? 'Spanish' : 'Inglés' }
        onPress={toggleLanguage}
      />
    </View>
  );
};

export default Header;
