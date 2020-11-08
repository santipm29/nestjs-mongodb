import { UserSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([
        {name: 'User', schema: UserSchema}
    ])],
    controllers: [UsersController],
    providers: [UserService]
})
export class UsersModule {}
