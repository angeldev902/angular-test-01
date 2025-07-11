interface Image {
    image_url:string
}
export interface Product {
    id:number;
    name:string;
    price:number;
    category:{
        name:string
    },
    brand:{
        name:string
    },
    images: Image[],
    created_at: Date
}

export interface ProductResponse {
    total: number,
    total_pages: number,
    current_page: number,
    data: Product[]
}