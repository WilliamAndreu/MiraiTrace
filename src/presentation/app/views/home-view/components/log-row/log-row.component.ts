import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FormatPipeModule} from "ngx-date-fns";

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [
    CommonModule,
    MatMenu,
    MatButtonModule,
    MatMenuTrigger,
    MatIconModule,
    MatSlideToggle,
    FormsModule,
    MatMenuItem,
    FormatPipeModule
  ],
  templateUrl: './log-row.component.html',
  styleUrl: './log-row.component.scss'
})
export class LogRowComponent implements  AfterViewInit, OnDestroy{
  @ViewChild('dateCell', {read: ElementRef, static:false})dateCell?: ElementRef<HTMLElement>;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger | undefined;

  public showMenuIcon = false;
  @Input({required: true}) message!: String;
  @Input({required: true}) date!: Date;
  @Input({required: true}) index!: number ;
  @Input({required: true}) priority!: number ;
  @Input({required: true}) mediaQuery!: MediaQueryList ;
  @Input({required: true}) hideLines!: Boolean ;

  constructor() {}

  ngOnDestroy(): void {
        console.log('desturccion!!!')
    }

  ngAfterViewInit(): void {
    this.adjustCellHeight();
    this.subscribeToMenuEvents();
  }

  private adjustCellHeight(): void {
    const cellHeight = this.dateCell?.nativeElement.offsetHeight;
    if (cellHeight !== undefined && cellHeight <= 32) {
      this.dateCell!.nativeElement.classList.add('align-middle');
    }
  }

  private subscribeToMenuEvents(): void {
    if (this.menuTrigger) {
      this.menuTrigger.menuClosed.subscribe(() => {
        this.toggleMenuIcon(false);
      });
    }
  }

  public toggleMenuIcon(isOpen: boolean): void {
    if (!isOpen && this.showMenuIcon) {
      this.showMenuIcon = false;
    }
  }

  public toggleMenuIconTrue(): void {
    this.showMenuIcon = true;
  }

  public toggleMenuIconFalse(): void {
    if (this.menuTrigger && !this.menuTrigger.menuOpen && this.showMenuIcon) {
      this.toggleMenuIcon(false);
    }
  }

}
