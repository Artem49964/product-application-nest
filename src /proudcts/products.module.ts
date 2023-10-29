import {forwardRef, Module, ValidationPipe} from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {User} from "../users/users.model";
import {FilesModule} from "../files/files.module";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports:[SequelizeModule.forFeature([User, Product]),
  FilesModule],
  exports: [ProductsService,
    ]
})
export class ProductsModule {}
