import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
  },
  semB: {
    position: 'absolute',
    top: '20%',
    // alignItems: 'center',
  },
  class: {
    marginTop: 30,
    alignItems: 'center',
  },
  classHead: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    // padding: 10,
    color: '#333533',
  },
  content: {
    // resizeMode: 'contain',
    width: '70%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gridContainer: {
    flexDirection: 'row',
  },
  semBar: {
    backgroundColor: '#FFFFFF',
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    padding: 5,
  },
  semText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    padding: 8,
    color: '#06B178',
  },
  semSwitch: {
    padding: 8,
  },
  semNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#06B178',
  },
  semNumber2: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
    backgroundColor: '#06B178',
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5,
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
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  subject: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333533',
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
