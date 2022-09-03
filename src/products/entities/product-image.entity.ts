import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './';

@Entity({ name: 'product_images' })
export class ProductImage {
  @ApiProperty({
    example: '8b0b7e14-cbb4-4628-be8e-0f1fe5699f6c',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Product Image Url',
  })
  @Column('text')
  url: string;

  @ApiProperty({
    description: 'Product ID',
    uniqueItems: true,
  })
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
