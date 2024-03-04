import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharactersRepository } from '@repositories/characters.repository';
import { CharactersImpRepository } from './repositories/characters/characters-implementation.repository';
import { GetHasNextAndCharactersUseCase } from '@usecases/get-hasnext-and-characters.usecase';
import { CharactersRemoteDataSource } from './source/characters-remote-datasource';
import { CharactersRemoteDataSourceImp } from './datasource/characters/rick-and-morty/characters-remote-datasource-imp';
import { Request } from '@interface-core/request';
import {GetGoogleUserUseCase} from "@usecases/google-user/get-google-user.usecase";
import {GoogleUserRepository} from "@repositories/google-user/google-user.repository";
import {GoogleUserImpRepository} from "@data/repositories/google-user/google-user-implementation.repository";
import {GoogleUserRemoteDatasource} from "@data/source/google-user/google-user-remote-datasource";
import {GoogleUserRemoteDatasourceImp} from "@data/datasource/google-user/remote/google-user-remote-datasource-imp";
import {GoogleUserLocalDatasource} from "@data/source/google-user/google-user-local-datasource";
import {GoogleUserLocalDatasourceImp} from "@data/datasource/google-user/local/google-user-local-datasource-imp";

@NgModule({
  providers: [
    Request,
    GetHasNextAndCharactersUseCase,
    GetGoogleUserUseCase,
    { provide: CharactersRepository, useClass: CharactersImpRepository },
    { provide: GoogleUserRepository, useClass: GoogleUserImpRepository },
    { provide: CharactersRemoteDataSource, useClass: CharactersRemoteDataSourceImp },
    { provide: GoogleUserRemoteDatasource, useClass: GoogleUserRemoteDatasourceImp },
    { provide: GoogleUserLocalDatasource, useClass: GoogleUserLocalDatasourceImp },

  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
