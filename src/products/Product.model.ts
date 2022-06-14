import * as mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },

});


export interface Product {
    title: string;
    price: number;
}