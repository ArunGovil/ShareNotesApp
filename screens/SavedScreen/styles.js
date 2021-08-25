import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06B178',
  },
  header: {
    flex: 1,
    paddingTop: 15,
    height: '25%',
    alignItems: 'center',
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  listContainer: {
    flex: 6,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  biline: {
    paddingTop: 5,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
  },
  subCard: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
  },
  touch: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  gname: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#333533',
  },
  gsub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'grey',
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
