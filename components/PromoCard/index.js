import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const PromoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.mainText}>
          Share Notes with {'\n'} your Friends,
        </Text>
        <Text style={styles.subText}>and help the {'\n'} Community Grow!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.promoImg}
          source={require('../../assets/images/promo.png')}
        />
      </View>
    </View>
  );
};

export default PromoCard;
