import {Expose} from "class-transformer";

export class TestDataModel {
  @Expose({name: 'HEADER_TITLE', toClassOnly: true})
  headerTitle: string;
  @Expose({name: 'SAMPLE_USER_JWT', toClassOnly: true})
  sampleUserJwt: string;
  @Expose({name: 'SAMPLE_ADMIN_JWT', toClassOnly: true})
  sampleAdminJwt: string;
  @Expose({name: 'JWT_SINGING_KEY', toClassOnly: true})
  jwtSigningKey: string;
}
