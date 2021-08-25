import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06B178',
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
  loginForm: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcome: {
    padding: 10,
    marginBottom: 10,
  },
  welImg: {
    width: 300,
    height: 150,
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
  loginButton: {
    width: '40%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#3A84E5',
    marginBottom: 30,
    marginTop: 5,
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 16,
    paddingLeft: 25,
    paddingRight: 25,
  },
  singupLink: {
    marginTop: 30,
  },
  signupText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#03045e',
  },
});

export default styles;
