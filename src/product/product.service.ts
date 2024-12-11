import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { faker } from '@faker-js/faker';
@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return {
      id: faker.number.int(),
      product: createProductDto.name,
      price: createProductDto.price,
      description: createProductDto.description,
      updatedAt: new Date(),
      createdAt: faker.date.past(),
    }
  }

  findAll() {
    const products = [];

    // Misalnya, menghasilkan 10 produk dummy
    for (let i = 0; i < 10; i++) {
      const product = {
        name: faker.commerce.productName(),  // Nama produk acak
        price: parseFloat(faker.commerce.price()),  // Harga acak (konversi ke float)
        description: faker.commerce.productDescription(),  // Deskripsi produk acak
        createdAt: faker.date.past(),  // Tanggal acak di masa lalu untuk createdAt
        updatedAt: new Date(),  // Tanggal saat ini untuk updatedAt
      };
      products.push(product);
    }

    return {
      data: products,
    };
  }
  findOne(id: number) {
    // Membuat data produk berdasarkan id
    const product = {
      id: id,  // ID produk
      name: faker.commerce.productName(),  // Nama produk acak
      price: parseFloat(faker.commerce.price()),  // Harga acak (konversi ke float)
      description: faker.commerce.productDescription(),  // Deskripsi produk acak
      createdAt: faker.date.past(),  // Tanggal acak di masa lalu untuk createdAt
      updatedAt: new Date(),  // Tanggal saat ini untuk updatedAt
    };

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return {
      id,
      product: updateProductDto.name || faker.commerce.productName(),
      price: updateProductDto.price || parseFloat(faker.commerce.price()),
      description: updateProductDto.description || faker.commerce.productDescription(),
      createdAt: faker.date.past(),
      updatedAt: new Date(),
    }
  }

  remove(id: number) {
    return {
      id,
      message: `Product with ID ${id} has been deleted`
    }
  }
}
