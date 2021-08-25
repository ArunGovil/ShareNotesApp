import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Pdf from 'react-native-pdf';

const filePreview = ({route}) => {
  console.log(route.params.data);
  return (
    <View>
      {route.params.data.type.includes('image/') && (
        <Image
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri: route.params.data.url,
          }}
        />
      )}

      {route.params.data.type === 'application/pdf' && (
        <Pdf
          source={{
            uri: route.params.data.url,
          }}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      )}
    </View>
  );
};

export default filePreview;
