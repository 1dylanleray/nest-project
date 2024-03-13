/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';


@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get( 'welcome/')
  getWelcome(): string {
    return this.appService.getWelcome();
  }
  @Get( 'users/')
  getUsers(): Array<string> {
    return this.appService.getUsers();
  }

  @Get('user/:username')
  getUser(
    @Param('username') username :string,
  ) : { message: string; username: string;  } {
    const message = `WELCOME BACK ${username.toUpperCase()} !`; 
    
    return {
      message,
      username,
    };
  }

  @Get('city/:cityname')
  getCity(
    @Param('cityname') cityname :string,
    @Query() query: {password : string}
  ) : {msg: string; cityname :string; password : string,} {
    const msg = `Bienvenue dans la ville de ${cityname.toUpperCase()}`;
    return {
      msg,
      cityname,
      password : query.password,
      
    };
  }

  


}
