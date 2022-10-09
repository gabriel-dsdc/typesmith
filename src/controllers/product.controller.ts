import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async createProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const newProduct = await this.service.createProduct({ name, amount });

    res.status(201).json(newProduct);
  }

  async listProducts(_req: Request, res: Response) {
    const productsList = await this.service.listProducts();
    res.status(200).json(productsList);
  }
}

export default ProductController;
