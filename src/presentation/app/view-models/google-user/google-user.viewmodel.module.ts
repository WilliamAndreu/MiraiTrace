import { NgModule } from '@angular/core';
import {GoogleUserViewModel} from "@view_models/google-user/google-user.viewmodel";


@NgModule({
    providers: [
        GoogleUserViewModel,
    ]
})
export class GoogleUserViewModelModule {}
