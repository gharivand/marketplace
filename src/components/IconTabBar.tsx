import React from 'react';
import {StyleSheet, Image} from 'react-native';

interface IProps {
  name: string;
  focused: boolean;
}

const icon = (name: string, focused: boolean) => {
  switch (true) {
    case name === 'Categories' && focused:
      return require('../assets/icons/category-active.png');
    case name === 'Categories' && !focused:
      return require('../assets/icons/category-de-active.png');
    case name === 'Orders' && focused:
      return require('../assets/icons/cart-active.png');
    case name === 'Orders' && !focused:
    default:
      return require('../assets/icons/cart-de-active.png');
  }
};

const IconTabBar: React.FC<IProps> = props => {
  return <Image source={icon(props.name, props.focused)} style={style.image} />;
};

const style = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default IconTabBar;
