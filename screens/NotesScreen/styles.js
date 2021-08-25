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
    flex: 5,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 6,
  },
  noteTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 18,
    marginLeft: 5,
  },
  noteSub: {
    fontFamily: 'Poppins-Regular',
    color: '#ADB5BD',
    marginLeft: 5,
  },
  arrowIcon: {
    color: '#06B178',
    fontSize: 28,
    fontFamily: 'Poppins-Regular',
    position: 'absolute',
    padding: 15,
    right: 10,
    top: 5,
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
