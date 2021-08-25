import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
  },
  navitem: {
    padding: 5,
    alignItems: 'center',
  },
  navtext: {
    fontFamily: 'Poppins-Medium',
    color: '#06B178',
    fontSize: 14,
  },
  navicon: {
    alignItems: 'center',
  },
});

export default styles;
