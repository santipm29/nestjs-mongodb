import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ObjectidPipe implements PipeTransform {
  transform(value: any) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException('The code is not correct');
    }
    return value;
  }
}
