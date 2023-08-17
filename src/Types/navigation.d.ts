import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type CategoriesParamsList = {
  CategoriesList: undefined;
  ProductsList: {title: string};
  Map: undefined;
};

export type ProductsParamsList = {
  OrdersList: undefined;
};

export type ApplicationStackParamList = {
  Categories: BottomTabScreenProps<CategoriesParamsList>;
  Orders: BottomTabScreenProps<ProductsParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
