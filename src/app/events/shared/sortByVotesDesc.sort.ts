import { ISession } from './';

export const sortByVotesDesc = (s1: ISession, s2: ISession): number => s2.voters.length - s1.voters.length;
