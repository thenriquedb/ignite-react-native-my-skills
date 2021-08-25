import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Platform,
  FlatList,
  Alert,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

const MIDDAY_HOUR = 12;
const AFTERNOON_END_HOUR = 18;

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    if (!newSkill) {
      Alert.alert('Skill is required');
      return;
    }

    setSkills(old => [...old, newSkill]);
    setNewSkill('');
  }

  function itsAfternoon(hour) {
    return hour >= MIDDAY_HOUR && hour < AFTERNOON_END_HOUR;
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < MIDDAY_HOUR) setGreeting('Good morning!');
    else if (itsAfternoon(currentHour)) setGreeting('Good afternoon!');
    else setGreeting('Good night!');
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Thiago! </Text>
        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          value={newSkill}
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#888"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} title="Add" />

        <Text style={[styles.title, {marginVertical: 30}]}> My skills </Text>

        <FlatList
          keyExtractor={item => item}
          data={skills}
          renderItem={({item}) => <SkillCard skill={item} key={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
  },
});
