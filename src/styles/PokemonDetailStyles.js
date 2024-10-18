import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
    image: {
      width: 150,
      height: 150,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      fontSize: 16,
    },
    detail: {
      fontSize: 14,
      marginVertical: 4,
      color: '#555', 
    },
  });
  export default styles;
