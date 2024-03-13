/* eslint-disable prettier/prettier */
import { Controller, Get, } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';


@Controller()
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get( 'nope/')
  getOptions(): string {
    return this.configurationService.getOptions();
  }



  


}
