import { Repository } from 'typeorm';
import { Products } from './products.entity';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Products>);
    getList(): Promise<Products[]>;
    getProductById(id: number): Promise<any>;
    addProduct(installData: any): Promise<object>;
    delProuct(id: number): Promise<object>;
}
