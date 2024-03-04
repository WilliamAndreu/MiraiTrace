import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RudoUserViewComponent} from "./rudo-user-view.component";

const routes: Routes = [
    {
        path: 'test',
        loadChildren: () =>
            import('../../views/characters-list-view/characters-list-view.module').then(
                (m) => m.CharactersModule
            ),
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () =>
            import('../../views/home-view/home-view.module').then(
                (m) => m.HomeViewModule
            ),
        pathMatch: 'full',
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RudoUserViewRoutingModule { }
