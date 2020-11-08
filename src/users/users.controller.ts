
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';


@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}
    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.userService.getUserById(id);
    }

    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.createUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: string): Promise<User> {
        return await this.userService.deleteUser(userId);
    }

    @Put(':id')
    async updateUser(@Body() user: CreateUserDto, @Param('id') userId: string): Promise<User> {
        return await this.userService.updateUser(userId, user);
    }

}
