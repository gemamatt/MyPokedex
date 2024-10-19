// src/components/Dock.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Dock = ({ children }) => {
  return (
    <View style={styles.dock}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  dock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
});

export default Dock;

