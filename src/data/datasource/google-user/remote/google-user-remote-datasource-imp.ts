import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, map, from, tap} from 'rxjs';
import { Request } from '@interface-core/request';
import {GoogleUserEntity} from "@models/google-user/google-user-entity.model";
import {GoogleUserModel} from "@data/repositories/google-user/dto/google-user-characters.model";
import {
  GoogleUserImplementationRepositoryMapper
} from "@data/repositories/google-user/mappers/google-user-repository.mapper";
import {GoogleUserRemoteDatasource} from "@data/source/google-user/google-user-remote-datasource";
import {CharactersEntity} from "@models/characters-entity.model";
import {Auth, authState, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";

@Injectable()
export class GoogleUserRemoteDatasourceImp extends GoogleUserRemoteDatasource {
  public fireAuth: Auth = inject(Auth)
  constructor(private db: Request) {
    super();
  }

  getGoogleUserData(params: {}): Observable<GoogleUserModel> {
    return from(signInWithPopup(this.fireAuth, new GoogleAuthProvider()))
        .pipe(
            tap((googleUserData: any) => {
              localStorage.setItem('gud', JSON.stringify(googleUserData));
            }),
            map(r => r as unknown as GoogleUserModel)
        );
  }


}
