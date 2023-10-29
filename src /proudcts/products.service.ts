import {CreateUserDto} from "../users/dto/create-user.dto";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./products.model";
import {CreateProductDto} from "./dto/create-product.dto";
import {FilesService} from "../files/files.service";


@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product,
                private fileService:FilesService) {}

    async create(dto: CreateProductDto, image:any) {

        const fileName = await this.fileService.createFile(image)

        const post = await this.productRepository.create({...dto, image:fileName})
        return post
    }
}