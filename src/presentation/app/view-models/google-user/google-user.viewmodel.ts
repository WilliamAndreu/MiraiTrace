import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {GetGoogleUserUseCase} from "@usecases/google-user/get-google-user.usecase";
import {GoogleUserEntity} from "@models/google-user/google-user-entity.model";

@Injectable()
export class GoogleUserViewModel {
  public googleUserBehaviorSubject = new BehaviorSubject<GoogleUserEntity>(
    {} as GoogleUserEntity
  );
  constructor(
    private getGoogleUserUseCase: GetGoogleUserUseCase
  ) {
  }

  initViewModel() {
    this.getGoogleUser();
  }


  private getGoogleUser() {
  this.getGoogleUserUseCase.execute({}).subscribe(value => {
console.log('broooo 22222')
    this.googleUserBehaviorSubject.next(value);
  })

  }

}
