import { BehaviorSubject, Observable } from 'rxjs';
import {inject, Injectable} from '@angular/core';
import { CharactersRemoteDataSource } from '@data/source/characters-remote-datasource';
import {GoogleUserRepository} from "@repositories/google-user/google-user.repository";
import { GoogleUserImplementationRepositoryMapper} from "@data/repositories/google-user/mappers/google-user-repository.mapper";
import {GoogleUserEntity} from "@models/google-user/google-user-entity.model";
import { GoogleUserRemoteDatasource} from "@data/source/google-user/google-user-remote-datasource";
import {GoogleUserLocalDatasource} from "@data/source/google-user/google-user-local-datasource";
import {Auth} from "@angular/fire/auth";

@Injectable()
export class GoogleUserImpRepository extends GoogleUserRepository {
  public fireAuth: Auth = inject(Auth)
  constructor(private googleUserRemoteDataSource: GoogleUserRemoteDatasource, private  googleUserLocalDataSource: GoogleUserLocalDatasource ) {
    super();
  }



    getGoogleUserData(params: {}): Observable<GoogleUserEntity> {

        return this.googleUserRemoteDataSource.getGoogleUserData(params);
    }
}
