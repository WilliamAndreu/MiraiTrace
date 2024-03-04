import { NgModule } from '@angular/core';
import {CharactersViewModel} from "./characters.viewmodel";

@NgModule({
    providers: [
        CharactersViewModel,
    ]
})
export class CharactersViewModelModule {}
