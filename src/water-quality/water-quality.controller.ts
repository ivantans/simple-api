import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WaterQualityService } from './water-quality.service';
import { WaterQualityDto } from './dto/water-quality.dto';

@ApiTags("Water Quality")
@Controller('water-quality')
export class WaterQualityController {
  constructor(private readonly waterQualityService: WaterQualityService) { }
  @Post()
  @ApiOperation({ summary: "POST", description: "Ph: number, temperature: number, humidity: numebr" })
  async waterQuality(@Body() waterQualityDto: WaterQualityDto) {
    return this.waterQualityService.waterQuality(waterQualityDto)
  }
}
