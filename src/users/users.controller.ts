import { ObjectidPipe } from './../pipes/objectid.pipe';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ObjectidPipe) userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ObjectidPipe) userId: string): Promise<User> {
    return this.userService.deleteUser(userId);
  }

  @Put(':id')
  async updateUser(
    @Body() user: UpdateUserDto,
    @Param('id', ObjectidPipe) userId: string,
  ): Promise<User> {
    return this.userService.updateUser(userId, user);
  }
}
