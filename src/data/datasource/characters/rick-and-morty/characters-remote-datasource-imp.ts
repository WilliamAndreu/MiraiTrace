import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CharacterModel } from '../../../repositories/characters/dto/rick-and-morty-characters.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CharactersImplementationRepositoryMapper } from '../../../repositories/characters/mappers/characters-repository.mapper';
import { Request } from '@interface-core/request';
import { CharactersRemoteDataSource } from '../../../source/characters-remote-datasource';
import { CharactersEntity } from '@models/characters-entity.model';

@Injectable()
export class CharactersRemoteDataSourceImp extends CharactersRemoteDataSource {
  userMapper = new CharactersImplementationRepositoryMapper();
  private path = `${environment.apiBaseUrl}`;
  private charactersSubject = new BehaviorSubject<CharactersEntity>(
    {} as CharactersEntity
  );

  constructor(private db: Request) {
    super();
  }

  override getCharactersList({
    page,
    needRequest,
  }: {
    page: number;
    needRequest: boolean;
  }): Observable<CharactersEntity> {
    const shouldMakeRequest = (needRequest && this.hasNextPage()) || page === 1;
    return this.requestCharacters(page);
  }

  private hasNextPage(): boolean {
    const infoValue = this.charactersSubject.value.info;
    return !!infoValue && infoValue.next !== undefined;
  }

  private requestCharacters(page: number): Observable<CharactersEntity> {
    return this.db.doRequest<CharacterModel>('get',`${this.path}/character/?page=${page}`)
  }
}
