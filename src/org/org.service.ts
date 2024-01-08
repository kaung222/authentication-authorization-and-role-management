import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { Repository } from 'typeorm';
import { Org } from './entities/org.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(Org)
    private readonly orgRepository: Repository<Org>,
  ) {}
  create(createOrgDto: CreateOrgDto) {
    return this.orgRepository.save(createOrgDto);
  }

  findAll() {
    return this.orgRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} org`;
  }

  update(id: number, updateOrgDto: UpdateOrgDto) {
    return `This action updates a #${id} org`;
  }

  remove(id: number) {
    return `This action removes a #${id} org`;
  }
}
