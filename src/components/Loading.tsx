import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import {Colors} from '../theme/colors';

interface IProps {
  isLoading: boolean;
}

const Loading: React.FC<IProps> = props => {
  if (!props.isLoading) return null;
  return (
    <View style={style.container}>
      <ActivityIndicator color={Colors.black} size={'small'} />
      <Text style={style.title}>{'Fetching...'}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 64,
  },
  title: {
    fontWeight: '700',
    color: Colors.black,
    fontSize: 28,
    textAlign: 'center',
  },
});

export default Loading;
