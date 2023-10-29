import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";


import { UsersModule } from './users/users.module';
import * as process from "process";
import {User} from "./users/users.model";
import {SequelizeModule} from "@nestjs/sequelize";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import {JwtModule} from "@nestjs/jwt";
import {Product} from "./proudcts/products.model";
import { FilesModule } from './files/files.module';
import {ProductsModule} from "./proudcts/products.module";
import {UserRoles} from "./roles/user-roles.model";


@Module({
    controllers:[AuthController],
    providers:[AuthService,


    ],

    imports:[
        ConfigModule.forRoot({envFilePath:`.${process.env.NODE_ENV}.env`}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: 5432,
            username:  'postgres',
            password:  'a32323232',
            database: process.env.POSTGRES_DB,
            models:[User, Role, UserRoles, Product],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProductsModule,
        JwtModule.register({
            secret: 'SECRET',
            signOptions: {
                expiresIn: '24h'

            }

        }),
        FilesModule
    ]

})


export class AppModule {}