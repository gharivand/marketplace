import {TStatus} from '../Types/products';
import {Colors} from '../theme/colors';

export const generate_random_id = () => {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
};

export const update_status = (status: TStatus) => {
  switch (status) {
    case 'pending':
      return 'in-process';
    case 'in-process':
      return 'delivery';
    case 'delivery':
    default:
      return 'delivered';
  }
};

export const status_color = (status: TStatus) => {
  switch (status) {
    case 'pending':
      return Colors.pending;
    case 'in-process':
      return Colors.process;
    case 'delivery':
      return Colors.delivery;
    case 'delivered':
      return Colors.delivered;
  }
};
