import { IsNotEmpty } from 'class-validator';

export class CreateOrgDto {
  @IsNotEmpty()
  name: string;

  ownerId: string;
}
