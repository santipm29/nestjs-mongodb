import { CreateUserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async deleteUser(userId: string): Promise<User> {
    await this.getUserById(userId);
    return await this.userModel.findOneAndDelete({ _id: userId });
  }

  async updateUser(
    userId: string,
    createUserDto: CreateUserDto,
  ): Promise<User> {
    await this.getUserById(userId);
    return await this.userModel.findByIdAndUpdate(userId, createUserDto, {
      new: true,
      useFindAndModify: false,
    });
  }
}
