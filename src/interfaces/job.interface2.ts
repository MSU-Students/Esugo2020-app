import { IUser } from './user.interface2';

export interface IJob {
  id?: number;
  title: string;
  description?: string;
  location: string;
  salary: string;
  datePosted?: Date;
  status: 'pending' | 'approved' | 'disapproved' | 'taken' | 'done' | 'canceled';
  user: IUser;
}
