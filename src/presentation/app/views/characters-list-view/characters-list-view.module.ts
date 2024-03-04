import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListViewComponent } from './characters-list-view.component';
import { CharactersViewModel } from 'src/presentation/app/view-models/characters/characters.viewmodel';
import { SharedModule } from '@shared/shared-module';
import { DataModule } from '@data/data.module';
import { FormsModule } from '@angular/forms';
import { CharactersViewModelModule } from 'src/presentation/app/view-models/characters/characters.viewmodel.module';
import { CharactersListViewRoutingModule } from './characters-list-view-routing.module';
import { PipesModule } from '@pipes/pipes.module';
import {GoogleUserViewModelModule} from "@view_models/google-user/google-user.viewmodel.module";

@NgModule({
  declarations: [CharactersListViewComponent],
  imports: [
    CharactersListViewRoutingModule,
    CommonModule,
    SharedModule,
    DataModule,
    FormsModule,
    CharactersViewModelModule,
    GoogleUserViewModelModule,
    PipesModule,
  ],
  providers: [CharactersViewModel],
})
export class CharactersModule {}
