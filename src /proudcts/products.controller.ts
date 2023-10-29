import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductsService} from "./products.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('/products')
export class ProductsController {

    constructor(private productService:ProductsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProduct(@Body() dto:CreateProductDto,
                  @UploadedFile() image) {
        return this.productService.create(dto, image)
    }
}