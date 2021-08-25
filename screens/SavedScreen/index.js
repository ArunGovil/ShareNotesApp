import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const chat = () => {
  Linking.openURL(
    'https://wa.me/919074897280?text=Hey, Free to clarify some doubts? TIA!',
  );

  console.log('Redir to WP');
};

const SavedScreen = () => {
  const navigation = useNavigation();
  const [TeacherList, setTeacherList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const onChildAdded = database()
      .ref('guides')
      .on('child_added', snapshot => {
        const blankArray = [];
        blankArray.push(snapshot.val());
        setTeacherList(notes => [...notes, ...blankArray]);
        setLoading(false);
        console.log(TeacherList);
      });
    return () => database().ref('guides').off('child_added', onChildAdded);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Clear Doubts</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.biline}>Available Guides</Text>
        {/* <View style={styles.listItem}>
          <TouchableOpacity>
            <View>
              <Text style={styles.noteTitle}>Note Title</Text>
              <Text style={styles.noteSub}>Note Details</Text>
              <Text style={styles.arrowIcon}>></Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={styles.gridContainer}>
          <FlatList
            style={styles.gridContainer}
            data={TeacherList}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.subCard}>
                <TouchableOpacity style={styles.touch} onPress={chat}>
                  <Image
                    style={styles.icon}
                    source={require('../../assets/images/guide.png')}
                  />
                  <Text style={styles.gname}>{item.name}</Text>
                  <Text style={styles.gsub}>{item.sub}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {Loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#06B178" />
          </View>
        ) : (
          <Text />
        )}
      </View>
    </View>
  );
};

export default SavedScreen;
