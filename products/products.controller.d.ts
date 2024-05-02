import { ProductsService } from './products.service';
import { Products } from './products.entity';
import { ProductsDto, ProductsIdDto } from './dto/product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getList(): Promise<Products[]>;
    getProductId(query: ProductsIdDto): Promise<object>;
    addProduct(body: ProductsDto): Promise<object>;
    deleteProduct(id: number): Promise<object>;
}
