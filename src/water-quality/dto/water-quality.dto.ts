import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional } from "class-validator"

export class WaterQualityDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ph: number
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  temperature: number
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  humidity: number
}