/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getCharacters(): string[] {
    return ['Goku', 'Vegeta', 'Piccolo', 'Gohan', 'Frieza', 'Cell', 'Majin Buu'];
  }

  getTransformations(character: string): string[] {
    switch (character.toLowerCase()) {
      case 'goku':
        return ['Super Saiyan', 'Super Saiyan Blue', 'Ultra Instinct'];
      case 'vegeta':
        return ['Super Saiyan', 'Super Saiyan Blue', 'Super Saiyan God'];
      case 'piccolo':
        return ['Fused with Nail', 'Fused with Kami', 'Super Namekian'];
      // Ajoutez d'autres cas pour d'autres personnages si nécessaire
      default:
        return [];
    }
  }

  getPowerLevel(character: string, transformation: string): number {
    switch (transformation.toLowerCase()) {
      case 'super saiyan':
        return 500000;
      case 'super saiyan blue':
        return 1000000;
      case 'ultra instinct':
        return 10000000;
      case 'fused with nail':
        return 100000;
      case 'fused with kami':
        return 200000;
      case 'super namekian':
        return 500000;
      default:
        return 0;
    }
  }
}
