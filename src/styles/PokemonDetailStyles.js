import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: { 
    padding: 10,
    margin: 10,
    backgroundColor: '#eaeded',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#d6dbdf',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold', 
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width: 380,
    height: 380,
  },
  number: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: 'normal',
    marginTop: 0,
    textAlign: 'center',
    width: '100%', 
    marginBottom: 18,
  },
  detail: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 0,
    textAlign: 'left',
    width: '100%', 
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
