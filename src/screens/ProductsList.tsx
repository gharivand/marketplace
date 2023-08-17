import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ApplicationScreenProps} from '../Types/navigation';
import {useGetProducts} from '../hooks/useGetProducts';
import {CardProduct, Loading} from '../components';
import {Colors} from '../theme/colors';

const ProductsList: React.FC<ApplicationScreenProps> = props => {
  const {isLoading, data} = useGetProducts();

  const onPressItem = (title: string) => {
    props.navigation.navigate('Map');
  };

  return (
    <View style={style.wrapper}>
      <FlatList
        data={data}
        keyExtractor={v => v.id.toString()}
        renderItem={({item}) => (
          <CardProduct {...item} onPress={() => onPressItem(item.title)} />
        )}
        ListHeaderComponent={
          <>
            <Text style={style.titleText}>{props.route.params.title}</Text>
            <Loading isLoading={isLoading} />
          </>
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: Colors.background},
  titleText: {
    color: Colors.black,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default ProductsList;
