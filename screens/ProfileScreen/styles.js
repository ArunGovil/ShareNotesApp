import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#06B178',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  profile: {
    width: '100%',
    position: 'absolute',
    top: '15%',
    padding: 10,
    alignItems: 'center',
  },
  profileImg: {
    backgroundColor: '#FFFFFF',
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  profileDetails: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  userDept: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 10,
    color: '#06B178',
  },
  others: {
    paddingTop: 5,
    width: '100%',
    // backgroundColor: 'red',
    height: '45%',
    backgroundColor: '#f9f9f9',
    marginTop: '40%',
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  list: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: '95%',
    flex: 1,
    marginBottom: 5,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  details: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#ADB5BD',
  },
  footer: {
    position: 'absolute',
    bottom: 5,
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 12,
  },
});

export default styles;
