import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IOrder} from '../Types/products';
import {Colors} from '../theme/colors';
import {shadow} from '../theme/shadow';
import {status_color} from '../utils/helper';

const CardOrder: React.FC<IOrder> = props => {
  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <Text style={style.textInfo}>ID: {props.id}</Text>
        <Text style={style.textInfo}>Product: {props.title}</Text>
        <Text style={style.textInfo}>Location: {props.location}</Text>
      </View>
      <Text style={[style.textStatus, {color: status_color(props.status)}]}>
        {props.status}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginVertical: 4,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    ...shadow.s2,
  },
  infoContainer: {
    gap: 8,
  },
  textInfo: {
    fontSize: 14,
    color: Colors.black,
  },
  textStatus: {
    fontWeight: '700',
    color: 'black',
    fontSize: 12,
    textTransform: 'capitalize',
  },
});

export default CardOrder;
