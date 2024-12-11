import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiOperation({summary: "Add Product", description: "name: required, price: required, description: optional"})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({summary: "Get all product"})
  findAll() {
    return this.productService.findAll();
  }
  
  @ApiOperation({summary: "Get product detail"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
  
  @ApiOperation({summary: "Update Product"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  
  @Put(':id')
  @ApiOperation({summary: "Update Product"})
  put(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  
  @Delete(':id')
  @ApiOperation({summary: "Delete Product"})
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
