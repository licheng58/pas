

import graph from '@/graph';
import { AxiosResponse } from 'axios';

const getLocalTime = (utc: string, time: Date | number) => {
  const utcArr = utc.split(':');
  const utcHour = isNaN(Number(utcArr[0])) ? 0 : Number(utcArr[0]);
  const utcMin = isNaN(Number(utcArr[1])) ? 0 : Number(utcArr[1]);
  const d = new Date(time);
  const len = d.getTime();
  const offset = d.getTimezoneOffset() * 60000;
  const utcTime = len + offset;
  return new Date(utcTime + 3600000 * utcHour + utcMin * 60000);
};

const setTimezoneOffset = () => {
  window.localStorage.setItem('utc', -(new Date().getTimezoneOffset() / 60) + ':0');
};

export const queryOAPTimeInfo = async () => {
  let utc = window.localStorage.getItem('utc');
  if (!utc) {
    const res: AxiosResponse = await graph.query('queryOAPTimeInfo').params({});
    if (!res.data || !res.data.data || !res.data.data.getTimeInfo || !res.data.data.getTimeInfo.timezone) {
      setTimezoneOffset();
      return;
    }
    utc = res.data.data.getTimeInfo.timezone / 100 + ':0';
    window.localStorage.setItem('utc', utc);
  }
};

export default getLocalTime;
