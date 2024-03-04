export interface GoogleUserModel {
  user: UserModel
  providerId: string
  _tokenResponse: TokenResponse
  operationType: string
}

export interface UserModel {
  uid: string
  email: string
  emailVerified: boolean
  displayName: string
  isAnonymous: boolean
  photoURL: string
  providerData: ProviderResponse[]
  stsTokenManager: StsTokenManager
  createdAt: string
  lastLoginAt: string
  apiKey: string
  appName: string
}

export interface ProviderResponse {
  providerId: string
  uid: string
  displayName: string
  email: string
  phoneNumber: any
  photoURL: string
}

export interface StsTokenManager {
  refreshToken: string
  accessToken: string
  expirationTime: number
}

export interface TokenResponse {
  federatedId: string
  providerId: string
  email: string
  emailVerified: boolean
  firstName: string
  fullName: string
  lastName: string
  photoUrl: string
  localId: string
  displayName: string
  idToken: string
  context: string
  oauthAccessToken: string
  oauthExpireIn: number
  refreshToken: string
  expiresIn: string
  oauthIdToken: string
  rawUserInfo: string
  kind: string
}
