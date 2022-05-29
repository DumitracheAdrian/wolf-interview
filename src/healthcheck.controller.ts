import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('healthcheck')
export class HealthcheckController {
  private readonly logger = new Logger(HealthcheckController.name);

  @Get('/readyz')
  ready(): void {
    this.logger.log('READY');

    return;
  }

  @Get('/livez')
  live(): void {
    this.logger.log('LIVE');

    return;
  }
}
