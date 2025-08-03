import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('form')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('postForm')
  async getForm(@Body() data: { name: string; phone: string }) {
    console.log(data);
    await this.appService.logForm(data);
  }
}
