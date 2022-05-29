import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('healthcheck')
export class HealthcheckController {
  private readonly logger = new Logger(HealthcheckController.name);

  @Get('/readyz')
  @ApiOperation({ summary: 'Healthcheck ready' })
  ready(): void {
    this.logger.log('READY');

    return;
  }

  @Get('/livez')
  @ApiOperation({ summary: 'Healthcheck live' })
  live(): void {
    this.logger.log('LIVE');

    return;
  }
}
