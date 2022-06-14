import { Body, Controller, Get, Param, Post, } from "@nestjs/common";
import { ProductService } from "./Product.service";

@Controller('products')
export class ProductController {
    constructor(private ProductService: ProductService) {

    }

    @Post('add')
    async addProduct(@Body('title') prodTitle: string, @Body('price') prodPrice: number) {
        const value = await this.ProductService.addProduct(prodTitle, prodPrice);
        return { "id": value };
    }

    @Get('showProducts')
    async showProducts() {
        const value = await this.ProductService.showProducts();
        return value;
    }

    @Get('showProduct')
    async ashowProduct(@Body('id') prodID: string) {
        const value = await this.ProductService.showProduct(prodID);
        return value;
    }

}