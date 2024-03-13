/* eslint-disable prettier/prettier */
// characters.module.ts

import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Module({
  providers: [CharactersService],
  exports: [CharactersService]
})
export class CharactersModule {}
