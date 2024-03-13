/* eslint-disable prettier/prettier */
// middleware

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CharactersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request to CharactersService:', req.url);
    next();
  }
}
