import { GoogleUserModel } from "@data/repositories/google-user/dto/google-user-characters.model";
import { Observable } from "rxjs";

export abstract class GoogleUserRemoteDatasource {
    abstract getGoogleUserData(params: {}): Observable<GoogleUserModel>;

}
