import { Body, Injectable } from '@nestjs/common';
import { WaterQualityDto } from './dto/water-quality.dto';

@Injectable()
export class WaterQualityService {
  async waterQuality(waterQualityDto: WaterQualityDto) {
    return {
      ph: waterQualityDto.ph,
      temperature: waterQualityDto.temperature,
      humidity: waterQualityDto.humidity
    }
  }
}
