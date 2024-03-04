import { Mapper } from '@interface-core/mapper';
import { CharacterModel } from '../dto/rick-and-morty-characters.model';
import { CharactersEntity } from '@models/characters-entity.model';

/**
 * Mapper class for converting CharacterModel to CharactersEntity and vice versa.
 */
export class CharactersImplementationRepositoryMapper extends Mapper<
  CharacterModel,
  CharactersEntity
> {
  /**
   * Maps from a CharacterModel to a CharactersEntity.
   *
   * @param param - The input CharacterModel to be mapped.
   * @returns A new CharactersEntity instance.
   */
  mapTo(param: CharacterModel): CharactersEntity {
    return {
      info: param.info,
      results: param.results,
    };
  }

  /**
   * Maps from a CharactersModel to a CharacterModel.
   *
   * @param param - The input CharactersModel to be mapped.
   * @returns A new CharacterModel instance.
   */
  mapFrom(param: CharactersEntity): CharacterModel {
    return {
      info: param.info,
      results: param.results,
    };
  }
}
