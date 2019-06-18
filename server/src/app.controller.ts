import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): string {
    return this.appService.getHello();
  }

  @Get('/post/:id')
  getPost(@Param() params): string {
    console.log(params.id);
    return this.appService.getHello();
  }
}
