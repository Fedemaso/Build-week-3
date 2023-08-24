import { IUser } from './iuser';

export interface IPost {
  _id: string; // server generated
  text: string; // the only property you need to send    "username": "admin", 											// server generated
  createdAt: string; // server generated
  updatedAt: string; // server generated
  __v: 0; // server generated
  user: IUser;
}
