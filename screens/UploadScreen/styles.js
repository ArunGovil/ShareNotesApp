import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#06B178',
    paddingTop: 15,
    height: '22%',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#FFFFFF',
  },
  promo: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: '12%',
  },
  typeContainer: {
    marginTop: '20%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageFile: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    width: 95,
    height: 95,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    color: '#ADB5BD',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  uploadDetails: {
    alignItems: 'center',
    padding: 10,
  },
  titleinput: {
    width: '90%',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    fontFamily: 'Poppins-Regular',
    padding: 10,
    fontSize: 14,
    color: 'black',
  },
  dropinput: {
    width: '90%',
    marginLeft: '5%',
    marginBottom: 15,
    borderWidth: 0,
  },
  uploadButton: {
    width: '90%',
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#06B178',
  },
  uploadText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
  },
  aindicator: {
    fontSize: 16,
    color: '#06B178',
    fontFamily: 'Poppins-SemiBold',
  },

  indic: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
