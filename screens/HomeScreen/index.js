import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import NavBar from '../../components/NavBar';
import HeadBar from '../../components/HeadBar';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const [SubList, setSubList] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Sem, setSem] = useState('s1');

  console.log(Sem);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  console.log(user);

  useEffect(() => {
    setLoading(true);
    setSubList([]);
    const onChildAdded = database()
      .ref('subjects')
      .orderByChild('sem')
      .equalTo(Sem)
      .on('child_added', snapshot => {
        const blankArray = [];
        blankArray.push(snapshot.val());
        setSubList(notes => [...notes, ...blankArray]);
        setLoading(false);
        console.log(SubList);
      });
    return () => database().ref('subjects').off('child_added', onChildAdded);
  }, [Sem]);

  return (
    <View style={styles.container}>
      <HeadBar />
      <View style={styles.semB}>
        <View style={styles.semBar}>
          <Text style={styles.semText}>Semester</Text>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s1')}>
            <Text style={styles.semNumber}>S1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s2')}>
            <Text style={styles.semNumber}>S2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s3')}>
            <Text style={styles.semNumber}>S3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s4')}>
            <Text style={styles.semNumber}>S4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s5')}>
            <Text style={styles.semNumber}>S5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.semSwitch}
            onPress={() => setSem('s6')}>
            <Text style={styles.semNumber}>S6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.class}>
        <Text style={styles.classHead}>Available Notes</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.gridContainer}>
          <FlatList
            style={styles.gridContainer}
            data={SubList}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.subCard}>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => navigation.navigate('Notes', {data: item})}>
                  <Image
                    style={styles.icon}
                    source={require('../../assets/images/icon.png')}
                  />
                  <Text style={styles.subject}>{item.name}</Text>
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
      <NavBar />
    </View>
  );
};

export default HomeScreen;
