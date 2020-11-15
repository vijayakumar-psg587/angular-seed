import {ErrorType} from "./enums/error-type.enum";

export class CustomErrorModel {
  message: string;
  status: string;
  type:ErrorType;
}
