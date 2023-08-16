import React from 'react';
import {Button, Text, View} from 'react-native';
import {ApplicationScreenProps} from '../Types/navigation';

const Categories: React.FC<ApplicationScreenProps> = ({navigation}) => (
  <View>
    <Button title="Go to Settings" onPress={() => navigation.navigate('')} />
    <Text>{'Categories'}</Text>
  </View>
);
export default Categories;
