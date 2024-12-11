import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

  @ApiProperty({
    type: String,
    required: true,
    description: "Required"
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    type: Number,
    required: true,
    description: "Required"
  })
  @IsPositive()
  @IsNotEmpty()
  price: number

  @ApiProperty({
    required: false,
    type: String,
    description: "Optional"
  })
  @IsString()
  @IsOptional()
  description: string

}
