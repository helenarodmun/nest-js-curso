/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';

@Injectable()
export class PostsService {

    cosntructor (
        @InjectRepository(Post) private postRepository: Repository<Post>,
        private usersService: UsersService
    ){}

    //tittle, content, authorId
    createPost() {
        this.usersService.
    }
    getPost() {}
}
