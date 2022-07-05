export interface IUser {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface IUserLogIngResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface IUserSignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
