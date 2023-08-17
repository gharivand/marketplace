import {useEffect, useState} from 'react';
import {IProducts} from '../Types/products';

export const useGetProducts = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const list: IProducts[] = [];
    const randomNumber = Math.floor(Math.random() * 12);
    for (let i = 0; i < randomNumber; i++) {
      list.push({id: i, title: `Product ${i}`});
    }
    // Simulate network request
    setTimeout(() => {
      setData(list);
      setIsLoading(false);
    }, 700);
  }, []);

  return {
    data,
    isLoading,
  };
};
