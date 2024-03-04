import { Mapper } from '@interface-core/mapper';
import { GoogleUserModel } from "@data/repositories/google-user/dto/google-user-characters.model";
import { GoogleUserEntity } from "@models/google-user/google-user-entity.model";


export class GoogleUserImplementationRepositoryMapper extends Mapper<
    GoogleUserModel,
    GoogleUserEntity
> {

  mapTo(param: GoogleUserModel): GoogleUserEntity {
    return {
      user: param.user,
      providerId: param.providerId,
      _tokenResponse: param._tokenResponse,
      operationType: param.operationType
    };
  }


  mapFrom(param: GoogleUserEntity): GoogleUserModel {
    return {
      user: param.user,
      providerId: param.providerId,
      _tokenResponse: param._tokenResponse,
      operationType: param.operationType
    };
  }
}
