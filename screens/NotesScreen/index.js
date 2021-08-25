import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const NotesScreen = ({route}) => {
  const navigation = useNavigation();
  const [FileList, setFileList] = useState([]);
  const [Loading, setLoading] = useState(true);
  const sub = route.params.data.id;

  useEffect(() => {
    const onChildAdded = database()
      .ref('notes')
      .orderByChild('subject')
      .equalTo(sub)
      .on('child_added', snapshot => {
        const blankArray = [];
        blankArray.push(snapshot.val());
        setFileList(notes => [...notes, ...blankArray]);
        setLoading(false);
        console.log(FileList);
      });
    return () => database().ref('notes').off('child_added', onChildAdded);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Notes</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={FileList}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Preview', {data: item})}>
                <View style={styles.listItem}>
                  <Text style={styles.noteTitle}>{item.title}</Text>
                  <Text style={styles.noteSub}>Note Details</Text>
                  <Text style={styles.arrowIcon}> > </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
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

export default NotesScreen;
