import { Observable } from 'rxjs';
import { UseCase } from '@interface-core/use-case';
import { GoogleUserRepository } from "@repositories/google-user/google-user.repository";
import { GoogleUserEntity } from "@models/google-user/google-user-entity.model";
import { Injectable } from '@angular/core';

@Injectable()
export class GetGoogleUserUseCase
  implements UseCase<{ page: number; needRequest: boolean }, GoogleUserEntity>
{
  constructor(private charactersRepository: GoogleUserRepository) {}

  execute(params: {}): Observable<GoogleUserEntity> {
    return this.charactersRepository.getGoogleUserData(params);
  }
}
