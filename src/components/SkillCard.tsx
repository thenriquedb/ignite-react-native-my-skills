import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

import {SkillData} from '../pages/Home';
import {useTheme} from '../hooks/useTheme';

interface SkillCardProps extends TouchableOpacityProps {
  skill: SkillData;
}

export const SkillCard = ({skill, ...rest}: SkillCardProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.skillCard, {backgroundColor: colors.secondary}]}
      activeOpacity={0.7}
      {...rest}>
      <Text style={[styles.textSkill, {color: colors.text}]}>{skill.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSkill: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
