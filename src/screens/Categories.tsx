import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ApplicationScreenProps} from '../Types/navigation';
import {UseGetCategories} from '../hooks/useGetCategories';
import {CardCategory, Loading} from '../components';
import {Colors} from '../theme/colors';

const Categories: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const {isLoading, data} = UseGetCategories();

  const onPressItem = (title: string) => {
    navigation.navigate('ProductsList', {title});
  };

  return (
    <View style={style.wrapper}>
      <FlatList
        numColumns={3}
        data={data}
        keyExtractor={v => v.id.toString()}
        renderItem={({item}) => (
          <CardCategory {...item} onPress={() => onPressItem(item.title)} />
        )}
        ListHeaderComponent={<Loading isLoading={isLoading} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: Colors.background},
});

export default Categories;
