export interface IProduct {
    id?: number;
    brand: string;
    title: string;
    images: string[];
    category: string;
    discountPercentage: number;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    description: string;
}