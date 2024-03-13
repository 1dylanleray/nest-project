/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): Array<string> {
    return ['Ten Shin Han','Raditz', 'Yamcha','Nappa','Chaozu'];
  }

  getWelcome(): string {
    return 'Welcome Back!';
  }

  
}
