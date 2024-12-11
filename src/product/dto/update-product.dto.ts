import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    name: "name",
    type: String,
    required: false
  })
  name?: string;
  @ApiProperty({
    name: "price",
    type: Number,
    required: false
  })
  price?: number;
  @ApiProperty({
    name: "description",
    type: String,
    required: false
  })
  description?: string;
}
