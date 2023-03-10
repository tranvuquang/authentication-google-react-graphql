export type IUser = {
  id: string;
  uid: string;
  email: string;
};

export type AuthState = {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
};

export const userDefaultData = {
  id: "",
  uid: "",
  email: "",
};
