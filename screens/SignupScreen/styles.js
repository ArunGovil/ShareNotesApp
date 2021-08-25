import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B178',
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignContent: 'flex-end',
    padding: 10,
    marginLeft: 10,
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#f0f6fd',
    fontSize: 28,
  },
  headerBiline: {
    fontFamily: 'Poppins-Medium',
    color: '#f0f6fd',
    fontSize: 26,
  },
  signupForm: {
    flex: 2,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    backgroundColor: 'white',
    color: '#000000',
    padding: 10,
    width: '70%',
    marginBottom: 20,
    borderRadius: 10,
  },
  subInput: {
    fontFamily: 'Poppins-Medium',
    width: '70%',
    marginBottom: 20,
    borderWidth: 0,
  },
  signupButton: {
    width: '40%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#3A84E5',
    marginBottom: 35,
    marginTop: 15,
  },
  signupText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 16,
    paddingLeft: 25,
    paddingRight: 25,
  },
  loginLink: {
    marginTop: 30,
  },
  loginText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#03045e',
  },
});

export default styles;
