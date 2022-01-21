

import { Duration } from '@/types/global';
import { TimeType } from '@/constants/constant';

const timeFormat = (time: Date[]): Duration => {
  let step: TimeType;
  const unix = Math.round(time[1].getTime()) - Math.round(time[0].getTime());
  if (unix <= 60 * 60 * 1000) {
    step = TimeType.MINUTE_TIME;
  } else if (unix <= 24 * 60 * 60 * 1000) {
    step = TimeType.HOUR_TIME;
  } else {
    step = TimeType.DAY_TIME;
  }
  return { start: time[0], end: time[1], step };
};

export default timeFormat;
