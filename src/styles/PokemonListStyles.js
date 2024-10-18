import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      padding: 10,
      margin: 10,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: 'red',
      fontSize: 16,
    },
  });
  export default styles;