import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Linter} from "eslint";


interface ProductCreationAttrs{
    title:string
    price:number
    description:string
    userId:number
    image:string
}

@Table({tableName:'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example:'1', description:'Уникальный идентификатор товара'})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;

    @ApiProperty({example:'Название товара'})
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    title: string;

    @ApiProperty({example:'1000', description:'Цена товара'})
    @Column({type:DataType.INTEGER, allowNull:true})
    price: string;


    @ApiProperty({example:'Описание товара'})
    @Column({type:DataType.STRING, defaultValue:false})
    description: string;


    @ApiProperty({example:'Изображение'})
    @Column({type:DataType.STRING})
    image: string;


    @Column({type:DataType.INTEGER})
    @ForeignKey(() => User)
    userId:number


    @BelongsTo(() => User)
    author: User;

}