import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';

@Module({
imports: [
  ConfigModule.forRoot(), // this is for using .env variables

  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST, // this is an .env file
    port: +process.env.DB_PORT, // this is an .env file
    database: process.env.DB_NAME, // this is an .env file
    username: process.env.DB_USERNAME, // this is an .env file
    password: process.env.DB_PASSWORD, // this is an .env file
    autoLoadEntities: true,
    synchronize: true, // this should be false in prod
  }), ProductsModule, CommonModule

], })

export class AppModule {}
