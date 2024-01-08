import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'role';

export const Role = (roles: string[]) => SetMetadata(ROLES_KEY, roles);

// export const Roles = Reflector.createDecorator<string[]>();
