export interface IAddUser {
  name: string;
  email: string;
  password: string;
}

export interface IReturnUser {
  code: number;
  success: boolean;
  message: string;
  user:
    | undefined
    | {
        name: string;
        email: string;
      };
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}
