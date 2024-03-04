import {inject, Injectable} from '@angular/core';
import { environment } from '@environments/environment';
import {BehaviorSubject, Observable, map, of, throwError} from 'rxjs';
import { Request } from '@interface-core/request';

import {
  GoogleUserImplementationRepositoryMapper
} from "@data/repositories/google-user/mappers/google-user-repository.mapper";
import {GoogleUserEntity} from "@models/google-user/google-user-entity.model";
import {GoogleUserModel} from "@data/repositories/google-user/dto/google-user-characters.model";
import {GoogleUserLocalDatasource} from "@data/source/google-user/google-user-local-datasource";
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";

@Injectable()
export class GoogleUserLocalDatasourceImp extends GoogleUserLocalDatasource {
  public fireAuth: Auth = inject(Auth)

  constructor(private db: Request) {
    super();
  }

  getGoogleUserData(): Observable<GoogleUserModel> {
    const storedUserData = this.getStoredUserDataFromLocalStorage();

    if (storedUserData) {
      return of(this.updateUserDataFromAuth(storedUserData));
    } else {
      return throwError(() => new Error("Error auth local"));
    }
  }

  private getStoredUserDataFromLocalStorage(): GoogleUserModel | null {
    const rawUserData = localStorage.getItem('gud');
    return rawUserData ? JSON.parse(rawUserData) as GoogleUserModel : null;
  }

  private updateUserDataFromAuth(userData: GoogleUserModel): GoogleUserModel {
    const currentUser = this.fireAuth.currentUser;

    if (currentUser) {
      return {
        ...userData,
        user: {
          ...userData.user,
          displayName: currentUser.displayName || '',
          email: currentUser.email || '',
          photoURL: currentUser.photoURL || ''
        }
      };
    } else {
      return userData;
    }
  }




}
