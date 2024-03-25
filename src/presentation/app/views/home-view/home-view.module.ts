import { NgModule } from '@angular/core';
import {HomeViewRoutingModule} from "@views/home-view/home-view-routing.module";
import {CommonModule} from "@angular/common";
import {HomeViewComponent} from "@views/home-view/home-view.component";
import {GoogleUserViewModelModule} from "@view_models/google-user/google-user.viewmodel.module";
import {DataModule} from "@data/data.module";
import {DateFnsModule} from "ngx-date-fns";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {LogRowComponent} from "@views/home-view/components/log-row/log-row.component";
import {AgVirtualScrollModule} from "ag-virtual-scroll";

@NgModule({
    declarations: [HomeViewComponent],
    imports: [
        HomeViewRoutingModule,
        CommonModule,
        GoogleUserViewModelModule,
        DataModule,
        DateFnsModule,
        MatChipListbox,
        MatChipOption,
        MatSlideToggle,
        FormsModule,
        MatMenu,
        MatButtonModule,
        MatMenuTrigger,
        MatIconModule,
        MatMenuItem,
        LogRowComponent,
        AgVirtualScrollModule
    ]
})
export class HomeViewModule {}
