import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListViewComponent } from '@views/characters-list-view/characters-list-view.component';
import { CharactersViewModel } from 'src/presentation/app/view-models/characters/characters.viewmodel';
import { BehaviorSubject } from 'rxjs';
import { CharactersEntity } from '@models/characters-entity.model';

describe('CharactersListViewComponent', () => {
  let component: CharactersListViewComponent;
  let fixture: ComponentFixture<CharactersListViewComponent>;
  let mockViewModel: jasmine.SpyObj<CharactersViewModel>;

  beforeEach(() => {
    mockViewModel = jasmine.createSpyObj('CharactersViewModel', [
      'loadMoreCharacters',
    ]);
    TestBed.configureTestingModule({
      declarations: [CharactersListViewComponent],
      providers: [{ provide: CharactersViewModel, useValue: mockViewModel }],
    });

    fixture = TestBed.createComponent(CharactersListViewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadMoreCharacters when scrolling to the bottom', () => {
    const isScrolledToBottomSpy = spyOn(
      component as any,
      'isScrolledToBottom'
    ).and.returnValue(true);
    component.searchTerm = '';

    fixture.detectChanges();
    const event = new Event('scroll');
    window.dispatchEvent(event);
    expect(mockViewModel.loadMoreCharacters).toHaveBeenCalledTimes(1);
  });

  it('should call loadMoreCharacters when scrolling to the bottom', () => {
    const isScrolledToBottomSpy = spyOn(
      component as any,
      'isScrolledToBottom'
    ).and.returnValue(true);
    component.searchTerm = '';

    const charactersModel: CharactersEntity = {
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Mock Character',
          status: 'Alive',
          species: 'Human',
          type: 'Main Character',
          gender: 'Male',
          origin: {
            name: 'Mock Location',
            url: 'https://example.com/location',
          },
          location: {
            name: 'Mock Location',
            url: 'https://example.com/location',
          },
          image: 'https://example.com/image.jpg',
          episode: [
            'https://example.com/episode/1',
            'https://example.com/episode/2',
          ],
          url: 'https://example.com/character/1',
          created: '2023-12-22T12:00:00Z',
        },
      ],
    };

    mockViewModel.charactersSubject = new BehaviorSubject<CharactersEntity>(
      charactersModel
    );
    fixture.detectChanges();
    const event = new Event('scroll');
    window.dispatchEvent(event);
    expect(mockViewModel.loadMoreCharacters).toHaveBeenCalledTimes(1);
  });
});
