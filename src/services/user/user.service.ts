import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async getUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async storeUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
