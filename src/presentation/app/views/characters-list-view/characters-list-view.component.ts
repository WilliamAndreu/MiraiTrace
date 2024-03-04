import {Component, HostListener, inject, OnInit} from '@angular/core';
import { CharactersEntity } from '@models/characters-entity.model';
import { CharactersViewModel } from 'src/presentation/app/view-models/characters/characters.viewmodel';
import { GoogleAuthProvider } from "@angular/fire/auth";
import {Auth, authState, signInWithPopup} from "@angular/fire/auth";
import {GoogleUserViewModel} from "@view_models/google-user/google-user.viewmodel";


@Component({
  selector: 'app-characters-list-view',
  templateUrl: './characters-list-view.component.html',
  styleUrls: ['./characters-list-view.component.scss'],
})
export class CharactersListViewComponent implements OnInit {
  public charactersList?: CharactersEntity;
  public searchTerm = '';
  public fireAuth: Auth = inject(Auth)
  authState$ = authState(this.fireAuth);
  constructor(private viewModel: CharactersViewModel, private googleViewModel : GoogleUserViewModel) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isScrolledToBottom() && this.searchTerm === '') {
      this.viewModel.loadMoreCharacters();
    }
  }

  ngOnInit(): void {
    this.viewModel.charactersSubject!.subscribe((value) => {
      this.charactersList = value;
    });
    this.googleViewModel.googleUserBehaviorSubject.subscribe(value => {
      if(Object.keys(value).length > 0){
        console.log(value)
      }

    })
  }

  private isScrolledToBottom(): boolean {
    return window.innerHeight + window.scrollY >= document.body.scrollHeight;
  }
  public test() {

    this.googleViewModel.initViewModel()

  }


}
