

import { Duration } from '@/types/global';
import { TimeType } from '@/constants/constant';

/**
 * init or generate durationRow Obj and save localStorage.
 */
const getDurationRow = (): Duration => {
  const durationRowString = localStorage.getItem('durationRow');
  let durationRow: Duration;
  if (durationRowString && durationRowString !== '') {
    durationRow = JSON.parse(durationRowString);
    durationRow = {
      start: new Date(durationRow.start),
      end: new Date(durationRow.end),
      step: durationRow.step,
    };
  } else {
    durationRow = {
      start: new Date(new Date().getTime() - 900000),
      end: new Date(),
      step: TimeType.MINUTE_TIME,
    };
    localStorage.setItem('durationRow', JSON.stringify(durationRow, null, 0));
  }
  return durationRow;
};

export default getDurationRow;
