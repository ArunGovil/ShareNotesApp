import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B178',
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#FFFFFF',
    paddingTop: 30,
    paddingLeft: 20,
  },
  picContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 30,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  pic: {
    resizeMode: 'center',
  },
});

export default styles;
