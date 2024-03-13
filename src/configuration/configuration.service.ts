/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  getOptions(): string {
    return 'Hello World!';
  }
}
