/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CharactersMiddleware } from './characters/characters.middleware';
import { CharactersModule } from './characters/characters.module';


@Module({
  imports: [UserModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {

    consumer
      .apply(CharactersMiddleware) // Puis appliquez le middleware CharactersMiddleware
      .forRoutes('/dbz'); 
  }
}

