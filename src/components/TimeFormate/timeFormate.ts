import { format } from 'date-fns';

const timeFormate = (seconds: number) => {
  
  return format(seconds, 'HH:mm')
}

export default timeFormate