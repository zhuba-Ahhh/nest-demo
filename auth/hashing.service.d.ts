/// <reference types="node" />
import { Buffer } from 'node:buffer';
export declare class HashingService {
    hash(data: string | Buffer): Promise<string>;
    compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}
