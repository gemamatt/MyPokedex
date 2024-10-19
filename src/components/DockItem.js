import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const DockItem = ({ source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.dockItem}>
      <Image source={{ uri: source }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dockItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default DockItem;
