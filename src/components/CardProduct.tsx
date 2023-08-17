import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IProducts} from '../Types/products';
import React from 'react';
import {Colors} from '../theme/colors';
import {shadow} from '../theme/shadow';

interface IProps extends IProducts {
  onPress: () => void;
}

const CardProduct: React.FC<IProps> = props => {
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Text style={style.logo}>{props.title.slice(0, 2)}</Text>
      </View>
      <View style={style.contentWrapper}>
        <Text style={style.title}>{props.title}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.button_buy}
          onPress={props.onPress}>
          <Text style={style.text_buy}>{'Buy'}</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    ...shadow.s2,
  },
  logoContainer: {
    backgroundColor: Colors.gray,
    borderEndStartRadius: 12,
    borderStartStartRadius: 12,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    color: '#282626',
    textTransform: 'uppercase',
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  title: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  button_buy: {
    backgroundColor: Colors.button,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
  },
  text_buy: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CardProduct;
