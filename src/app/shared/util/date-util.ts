import {Moment} from "moment";

export const getDaysDiff = (startDate: Moment, endDate: Moment): number => {
  if (!startDate || !endDate) {
    return 0;
  }
  return endDate.diff(startDate, 'days');
};
