import { NgModule } from '@angular/core';
import {RudoUserViewComponent} from "./rudo-user-view.component";
import {RudoUserViewRoutingModule} from "./rudo-user-view-routing.module";
import {CommonModule} from "@angular/common";
import { MatSidenavModule} from "@angular/material/sidenav";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [RudoUserViewComponent],
  exports: [
    RudoUserViewComponent
  ],
  imports: [
    RudoUserViewRoutingModule,
    CommonModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButton,
    MatNavList,
    MatToolbar,
    MatIconButton,
    MatListItem,
    MatIcon,
    MatMenuModule,
    MatButtonModule
  ]
})
export class RudoUserViewModule {}
