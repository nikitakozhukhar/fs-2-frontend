import React from 'react'
import { format } from 'date-fns';

type Props = {
  time: number | Date | undefined;
}

const timeFormate = (seconds: number) => {
  
  return format(seconds, 'HH:mm')
  // const hours = Math.floor(seconds / 3600);
  // const minutes = Math.floor((seconds / 3600) / 60)
  // return (
  //   `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')}`
  // )
}

export default timeFormate