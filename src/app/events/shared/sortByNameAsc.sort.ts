import { ISession } from '.';

export const sortByNameAsc = (s1: ISession, s2: ISession): number => {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
};
