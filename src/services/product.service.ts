import IProduct from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createProduct({ name, amount }: IProduct) {
    const newProduct = await this.model.createProduct({ name, amount });
    return newProduct;
  }
}

export default ProductService;
