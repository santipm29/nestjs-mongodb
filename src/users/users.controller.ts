
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { Controller, Delete, Get, Post, Put, Body, Param, BadRequestException, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { isValidObjectId } from 'mongoose';


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}
    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') userId: string): Promise<User> {
        if (!isValidObjectId(userId)) throw new BadRequestException('UserId incorrect');
        const user: User = await this.userService.getUserById(userId);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.createUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') userId: string): Promise<User> {
        if (!isValidObjectId(userId)) throw new BadRequestException('UserId incorrect');
        const user: User = await this.userService.deleteUser(userId);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    @Put(':id')
    async updateUser(@Body() user: CreateUserDto, @Param('id') userId: string): Promise<User> {
        if (!isValidObjectId(userId)) throw new BadRequestException('UserId incorrect');
        const userUpdated: User = await this.userService.updateUser(userId, user);
        if (!userUpdated) throw new NotFoundException('User not found');
        return userUpdated;
    }

}
