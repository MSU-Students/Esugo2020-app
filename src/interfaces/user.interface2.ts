import { IJob } from './job.interface2';

export interface IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: string;
  gender: string;
  address?: string;
  contact?: string;
  email?: string;
  company?: string;
  location?: string;
  type: 'worker' | 'employer' | 'moderator' | 'admin';
  status: 'available' | 'suspended' | 'banned' | 'pending';
  username: string;
  password: string;
  jobs: IJob[]
}
