import { Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Org } from './entities/org.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Org])],
  controllers: [OrgController],
  providers: [OrgService],
})
export class OrgModule {}
