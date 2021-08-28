import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Platform,
  FlatList,
  Alert,
  Switch,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import {Theme} from '../contexts/ThemeProvider';

import {useTheme} from '../hooks/useTheme';

const MIDDAY_HOUR = 12;
const AFTERNOON_END_HOUR = 18;

export interface SkillData {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);

  const {colors, theme, toggleTheme} = useTheme();

  function handleAddNewSkill() {
    if (!newSkill) {
      Alert.alert('Skill is required');
      return;
    }

    const data: SkillData = {
      id: new Date().getTime().toString(),
      name: newSkill,
    };

    setSkills(old => [...old, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkills(old => old.filter(skill => skill.id !== id));
  }
  function itsAfternoon(hour: number) {
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
      <View style={[styles.container, {backgroundColor: colors.bg}]}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, {color: colors.text}]}>
              Welcome, Thiago!{' '}
            </Text>
            <Text style={[styles.greeting, {color: colors.text}]}>
              {greeting}
            </Text>
          </View>
          <Switch value={theme === Theme.dark} onValueChange={toggleTheme} />
        </View>

        <TextInput
          value={newSkill}
          style={[
            styles.input,
            {backgroundColor: colors.secondary, color: colors.text},
          ]}
          placeholder="New skill"
          placeholderTextColor="#888"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} title="Add" />

        <Text
          style={[styles.title, {color: colors.text}, {marginVertical: 30}]}>
          My skills
        </Text>

        <FlatList
          keyExtractor={({id}) => id}
          data={skills}
          renderItem={({item}) => (
            <SkillCard
              onPress={() => handleRemoveSkill(item.id)}
              skill={item}
              key={item.id}
            />
          )}
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
    marginBottom: 10,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
  },
});
