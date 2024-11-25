import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepositiory: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepositiory.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepositiory.find();
  }

  async findOne(id: number): Promise<User> {
    const todo = await this.usersRepositiory.findOneBy({ id });
    return todo;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User[]> {
    await this.usersRepositiory.update(id, updateUserDto);
    return this.usersRepositiory.find();
  }

  async remove(id: number): Promise<User[]> {
    const user = await this.usersRepositiory.findOneBy({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`); // Gestion des erreurs
    }
    await this.usersRepositiory.remove(user);
    return this.usersRepositiory.find();
  }
}
