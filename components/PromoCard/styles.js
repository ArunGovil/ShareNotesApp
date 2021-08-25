import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '20%',
    width: '80%',
    borderRadius: 20,
    padding: 15,
  },
  textContent: {
    padding: 10,
  },
  mainText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  subText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#ADB5BD',
  },
  imageContainer: {
    padding: 5,
    // width: 150,
  },
  promoImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    aspectRatio: 3 / 2,
  },
});

export default styles;
