import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async getStatus(): Promise<object> {
    return this.appService.getStatus();
  }
}
