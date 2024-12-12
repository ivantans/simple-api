import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { WaterQualityController } from './water-quality/water-quality.controller';
import { WaterQualityService } from './water-quality/water-quality.service';
import { WaterQualityModule } from './water-quality/water-quality.module';

@Module({
  imports: [ProductModule, WaterQualityModule],
  controllers: [AppController, WaterQualityController],
  providers: [AppService, WaterQualityService],
})
export class AppModule {}
