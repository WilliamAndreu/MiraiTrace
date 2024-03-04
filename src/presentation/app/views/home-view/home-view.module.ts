import { NgModule } from '@angular/core';
import {HomeViewRoutingModule} from "@views/home-view/home-view-routing.module";
import {CommonModule} from "@angular/common";
import {HomeViewComponent} from "@views/home-view/home-view.component";

@NgModule({
    declarations: [HomeViewComponent],
    imports: [
        HomeViewRoutingModule,
        CommonModule,
    ]
})
export class HomeViewModule {}
