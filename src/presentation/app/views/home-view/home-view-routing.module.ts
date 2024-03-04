import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersListViewComponent} from "@views/characters-list-view/characters-list-view.component";
import {HomeViewComponent} from "@views/home-view/home-view.component";

const routes: Routes = [
    {
        path: '',
        component: HomeViewComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeViewRoutingModule { }
