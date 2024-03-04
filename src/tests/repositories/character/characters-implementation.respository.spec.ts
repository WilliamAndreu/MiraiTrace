import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharactersImplementationRepositoryMapper } from '../../../data/repositories/character/mappers/characters-repository.mapper';
import { CharactersEntity } from '@models/characters-entity.model';
import { CharacterModel } from '../../../data/repositories/character/dto/rick-and-morty-characters.model';
import { environment } from 'src/environments/environment';
import { CharactersImpRepository } from '../../../data/repositories/character/characters-implementation.repository';

describe('CharactersImpRepository', () => {
  let service: CharactersImpRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CharactersImpRepository,
        CharactersImplementationRepositoryMapper,
      ],
    });
    service = TestBed.inject(CharactersImpRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters and update the BehaviorSubject', fakeAsync(() => {
    const mockCharacters: CharacterModel = {
      info: { count: 1, pages: 1, next: null, prev: null },
      results: [
        {
          id: 1,
          name: 'Test Character',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
          image: '',
          episode: [],
          url: '',
          created: '',
        },
      ],
    };

    const expectedCharactersModel: CharactersEntity = {
      info: { count: 1, pages: 1, next: null, prev: null },
      results: [
        {
          id: 1,
          name: 'Test Character',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
          image: '',
          episode: [],
          url: '',
          created: '',
        },
      ],
    };

    service
      .getCharacters({ page: 1, needRequest: true })
      .subscribe((charactersModel) => {
        expect(charactersModel).toEqual(expectedCharactersModel);
      });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}character/?page=1`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockCharacters);

    tick(); // Simulate the passage of time to resolve the observable

    // Check if the BehaviorSubject was updated
    expect(service['charactersSubject'].value).toEqual(expectedCharactersModel);
  }));

  it('should not make a new request if data is already available', fakeAsync(() => {
    // Set initial data in the BehaviorSubject
    const initialData: CharactersEntity = {
      info: {
        count: 1,
        pages: 1,
        next: 'https://api.example.com/characters/?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Test Character',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
          image: '',
          episode: [],
          url: '',
          created: '',
        },
      ],
    };
    service['charactersSubject'].next(initialData);

    const expectedCharactersModel: CharactersEntity = {
      info: {
        count: 1,
        pages: 1,
        next: 'https://api.example.com/characters/?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Test Character',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: '', url: '' },
          location: { name: '', url: '' },
          image: '',
          episode: [],
          url: '',
          created: '',
        },
      ],
    };

    service
      .getCharacters({ page: 2, needRequest: true })
      .subscribe((charactersModel) => {
        expect(charactersModel).toEqual(expectedCharactersModel);
      });

    // No request should be made since data is already available
    httpTestingController.expectNone(
      `${environment.apiBaseUrl}character/?page=2`
    );

    tick(); // Simulate the passage of time to resolve the observable

    // Check if the BehaviorSubject was not updated
    expect(service['charactersSubject'].value).toEqual(initialData);
  }));
});
