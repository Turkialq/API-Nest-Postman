import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./Product.controller";
import { productSchema } from "./Product.model";
import { ProductService } from "./Product.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'product', schema: productSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule { }


