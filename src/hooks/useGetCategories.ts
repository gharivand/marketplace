import {useEffect, useState} from 'react';
import {ICategories} from '../Types/products';

const mockData = require('../data/mock_categories.json');

export const UseGetCategories = () => {
  const [data, setData] = useState<ICategories[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      setData(mockData.data);
      setIsLoading(false);
    }, 2000);
  }, []);

  return {
    data,
    isLoading,
  };
};
