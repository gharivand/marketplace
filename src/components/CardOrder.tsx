import {StyleSheet, Text, View} from 'react-native';
import {IOrder, TColor} from '../Types/products';
import React from 'react';
import {Colors} from '../theme/colors';
import {shadow} from '../theme/shadow';

const status_color = (color: TColor) => {
  switch (color) {
    case 'pending':
      return Colors.pending;
    case 'in-process':
      return Colors.process;
    case 'delivery':
      return Colors.delivery;
    case 'delivered':
      return Colors.delivered;
  }
};

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
    marginTop: 8,
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
