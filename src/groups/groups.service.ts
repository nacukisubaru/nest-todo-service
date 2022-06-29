import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CrudGroupDto } from './dto/crud-group.dto';
import { Groups } from './groups.model';

@Injectable()
export class GroupsService {

    constructor(@InjectModel(Groups) private groupRepo: typeof Groups) {}

    add(dto:CrudGroupDto) {
        return this.groupRepo.create(dto);
    }

    update(id, dto) {
        return this.groupRepo.update(id, dto);
    }

    remove(id) {
        return this.groupRepo.destroy(id);
    }
}
