import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#DC143C',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderBottomWidth: 8,
    borderBottomColor: '#000000',
  },
  headerText: {
    marginTop:30,
    fontSize: 25,
    fontWeight: 'bold',
    color:'#000000',
  },
  translateImage: {
    marginTop:30,
    width: 50,
    height: 50,
  },
});

export default styles;
