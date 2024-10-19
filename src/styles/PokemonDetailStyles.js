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
    borderWidth: 2,
    borderColor: '#d6dbdf',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold', 
    color: '#000000',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
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
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 0,
    textAlign: 'center',
    width: '100%', 
    marginBottom: 18,
    color: '#202f3a',
  },
  detail: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 0,
    textAlign: 'left',
    width: '100%', 
    marginTop: 5,
    color: '#202f3a',
  },
  evolutionsTitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 0,
    textAlign: 'center',
    color: '#778d9e',
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
