export interface AuthCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  confirmEmail: string;
}

export type AuthResponse = {
  _tokenResponse: TokenResponse;
  operationType: string;
  providerId: string | null;
  user: AuthUser;
};

type TokenResponse = {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
};

type AuthUser = {
  _redirectEventId: string | undefined;
  apiKey: string;
  appName: string;
  createdAt: string;
  displayName: string | undefined;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  phoneNumber: string | undefined;
  photoURL: string | undefined;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  tenantId: string | undefined;
  uid: string;
};

type ProviderData = {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
};

type StsTokenManager = {
  accessToken: string;
  expirationTime: number;
  refreshToken: string;
  tokenType: string;
  idToken: string;
};
