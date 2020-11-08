import { IsEmail, IsNumber, IsPhoneNumber, IsString, Length, Max, MaxLength } from 'class-validator'

export class CreateUserDto{
    @IsString()
    @Length(6, 10)
    readonly document: string;

    @IsString()
    @MaxLength(50)
    readonly firstName: string;

    @IsString()
    @MaxLength(50)
    readonly lastName: string;

    @IsNumber()
    @Max(110)
    readonly age: number;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    @MaxLength(100)
    readonly address: string;
}