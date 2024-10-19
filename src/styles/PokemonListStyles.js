import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    }, 
    card: {
      padding: 10,
      margin: 10,
      backgroundColor: '#eaeded',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: '#d6dbdf',
    },
    image: {
      width: 100,
      height: 100,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 0,
      color: '#202f3a',
    },
    number: {
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
      position: 'absolute',
      top: 10,
      right: 10,
    },
    detail: {
      fontSize: 15,
      fontWeight: 'normal',
      marginTop: 0,
      textAlign: 'left',
      width: '100%', 
      color: '#202f3a',
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
  