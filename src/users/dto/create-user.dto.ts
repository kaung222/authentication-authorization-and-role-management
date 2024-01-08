import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  AUTHOR = 'author',
  SUPER_ADMIN = 'super admin',
}

export class CreateUserDto {
  @ApiProperty({
    description: 'User role (admin, user, author, super admin)',
    enum: UserRole, // Use the actual enum type here
    default: UserRole.USER, // Set a default value if needed
  })
  role: UserRole;

  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User password' })
  password: string;
}
