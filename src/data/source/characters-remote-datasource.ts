import { CharacterModel } from '../repositories/characters/dto/rick-and-morty-characters.model';
import { Observable } from "rxjs";

export abstract class CharactersRemoteDataSource {
    abstract getCharactersList({ page, needRequest }: { page: number; needRequest: boolean }): Observable<CharacterModel>;
}
