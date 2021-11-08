import { Seller } from "./sellers"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[]; // ? = valor opcional na hora de preencher o estado
    last?: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    // "sort": {
    //     "empty": false,
    //     "unsorted": false,
    //     "sorted": true
    // },
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}