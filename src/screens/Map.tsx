import React, {useContext, useState} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';

import {Colors} from '../theme/colors';
import {OrdersContext} from '../data/context/OrdersContext';
import {ApplicationScreenProps} from '../Types/navigation';

const Map: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const [location] = useState({lat: '35.752516', lng: '51.398997'});
  const {addOrder} = useContext(OrdersContext);

  const submit_order = () => {
    if (addOrder) {
      addOrder(`${location.lat},${location.lng}`);
      navigation.popToTop();
      navigation.navigate('Orders');
    }
  };
  return (
    <View style={style.wrapper}>
      <Image
        source={require('../assets/icons/pin.png')}
        style={style.pinIcon}
      />
      <View style={style.buttonWrapper}>
        <Button
          title={'Submit Order'}
          color={Colors.button}
          onPress={submit_order}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinIcon: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.shadow3,
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default Map;
