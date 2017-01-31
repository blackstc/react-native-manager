import EMPLOYLEE_UPDATE from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYLEE_UPDATE
    payload: { prop, value };
  }
};
