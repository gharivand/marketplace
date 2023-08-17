import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {ICategories} from '../Types/products';
import React from 'react';

const width = Dimensions.get('screen').width;

interface IProps extends ICategories {
  onPress: () => void;
}

const CardCategory: React.FC<IProps> = props => {
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <View style={style.logoContainer}>
        <Text style={style.logo}>{props.title.slice(0, 2)}</Text>
      </View>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: width / 3,
    minHeight: width / 3,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  logo: {
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    color: '#282626',
    textTransform: 'uppercase',
  },
  title: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default CardCategory;