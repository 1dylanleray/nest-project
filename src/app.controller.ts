/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { CharactersService } from './characters/characters.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService, private readonly charactersService : CharactersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get( 'welcome/')
  getWelcome(): string {
    return this.userService.getWelcome();
  }

  @Get('user/:username')
  getUser(
    @Param('username') username :string,
    
  ) : { message: string; username: string;  } {
    const message = `WELCOME BACK ${username.toUpperCase()} !`; // Message personnalisé
    
    return {
      message,
      username,
    };
  }

  @Get( 'dbz/')
  getSecondaryCharacters(): string[] {
    return this.charactersService.getCharacters();
  }
  @Get('transformations/:character') 
  getTransformations(@Param('character') character: string) {
    return this.charactersService.getTransformations(character);
  }

  @Get('power-level/:character/:transformation') 
  getPowerLevel(@Param('character') character: string, @Param('transformation') transformation: string) {
    return this.charactersService.getPowerLevel(character, transformation);
  }

  @Get('city/:cityname')
  getCity(
    @Param('cityname') cityname :string,
    @Query() query: {password : string}
  ) : {cityname :string; password : string,} {
    return {
      cityname,
      password : query.password,
      
    };
  }

  @Post('adduser/:newuser')
  create( 
    @Param('newuser') newuser : string,
    ) {
      console.log(newuser);
    return 'This action adds a new cat';
  }


}
