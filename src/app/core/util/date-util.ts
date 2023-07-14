import * as moment from "moment/moment";

export const getDaysDiff = (startDate: any, endDate: any): number => {
  const momentStartDate = moment(startDate);
  const momentEndDate = moment(endDate);

  if (momentStartDate.isValid() && momentEndDate.isValid()) {
    return momentEndDate.startOf('day').diff(momentStartDate.startOf('day'), 'days');
  }
  return 0;
};
