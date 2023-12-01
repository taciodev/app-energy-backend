import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "@/interfaces/users.interface";
import { PrismaUsersRepository } from "@/repositories/users.repository";

export class UsersUseCase {
  private userRepository: UsersRepository;
  constructor() {
    this.userRepository = new PrismaUsersRepository();
  }

  async create({ name, email }: Prisma.UserCreateInput): Promise<User> {
    const verifyIfUserExists = await this.userRepository.findByEmail(email);
    
    if (verifyIfUserExists) {
      throw new Error('User already exists');
    }

    const user = await this.userRepository.create({ name, email });
    return user;
  }
}