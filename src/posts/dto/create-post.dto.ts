import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreatePostDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  body: string;
  @ApiProperty({ description: 'title for the post', oneOf: [] })
  @IsNotEmpty()
  title: string;
}
