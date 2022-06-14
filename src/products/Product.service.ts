import { Injectable } from "@nestjs/common";
import { Product, productSchema } from "./Product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class ProductService {
    constructor(@InjectModel('product') private readonly productModel: Model<Product>) { };


    async addProduct(title: String, price: Number) {
        let temp = new this.productModel({ "title": title, "price": price });
        const result = await temp.save();
        console.log(temp);
        return result.id as string;
    }

    async showProduct(id: string): Promise<Product> {
        const result = await this.productModel.findById(id);
        if (result) {
            return result;
        } else {
            console.log("no product with that id");
        }
    }

    async showProducts() {
        const result = this.productModel.find().exec();
        return result;
    }

}



