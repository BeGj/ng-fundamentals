export interface ISession extends SessionBase {
  id: number;
  voters: string[];
  eventId: number;
}



export interface SessionBase {
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
}
