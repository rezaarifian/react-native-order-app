type ListOrder = {
    list: ItemOrder;
}[];

type ItemOrder = {
    created_at: string;
    customer_name: string;
    total_products: number;
    total_price: string;
    id: string;
};

type DetailOrder = {
    id: string,
    customer_name: string,
    products: Products[],
};

type Products = {
    product_id: number,
    product_price: number,
    quantity: number,
};

type ListProduct = {
    product: ItemProducts,
}[];

type ItemProducts = {
    id: number, 
    name: string, 
    price: number
};