import { Observable } from 'rxjs';
import { GoogleUserEntity } from "@models/google-user/google-user-entity.model";

export abstract class GoogleUserRepository{
  abstract getGoogleUserData(params: {}): Observable<GoogleUserEntity>;
}
