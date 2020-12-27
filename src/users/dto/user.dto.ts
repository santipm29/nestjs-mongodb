import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 10)
  readonly document: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(110)
  readonly age: number;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  readonly address?: string;
}

export class UpdateUserDto extends CreateUserDto {}
