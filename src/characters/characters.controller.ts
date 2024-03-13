/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}

  @Get('dbz/')
  getCharacters(): string[] {
    return this.characterService.getCharacters();
  }

  @Get('transformations/:character')
  getTransformations(character: string): string[] {
    return this.characterService.getTransformations(character);
  }

  @Get('power-level/:character/:transformation')
  getPowerLevel(character: string,transformation: string,
  ): number {
    return this.characterService.getPowerLevel(character, transformation);
  }

  
}
