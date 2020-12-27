import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DatabaseService } from './config/database/database.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
