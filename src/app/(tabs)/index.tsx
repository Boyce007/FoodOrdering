import { View, } from 'react-native';
import ProductListItem from '@/src/components/ProductListItem';
import products from '../../../assets/data/products';

const product = products[0];
export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={products[5]} />

      <ProductListItem product={products[1]}/>
    </View>
    
  );
  
}


