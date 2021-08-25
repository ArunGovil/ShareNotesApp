import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
});

export default styles;
