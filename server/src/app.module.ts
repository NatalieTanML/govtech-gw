import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/govtech'),
    UrlsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
